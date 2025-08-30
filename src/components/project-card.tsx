"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Eye } from "lucide-react";
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
import Link from "next/link";

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
  liveLink = "#",
  sourceLink = "#",
}: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 border-transparent hover:border-primary/50">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-4">
          <Button asChild variant="outline" className="w-full">
            <Link href={sourceLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
