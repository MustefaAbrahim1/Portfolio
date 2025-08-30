"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  tags,
  liveLink,
}: ProjectCardProps) {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-lg">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border mb-4">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {liveLink && (
            <Button asChild variant="default" className="w-full sm:w-auto">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                Live Preview <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
