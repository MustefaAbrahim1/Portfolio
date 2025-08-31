
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Eye, FileText } from "lucide-react";
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
  paperLink?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  tags,
  liveLink = "#",
  sourceLink = "#",
  paperLink,
}: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const isResearch = tags.includes("Research");

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
            width={600}
            height={400}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant={tag === 'Research' ? 'default' : 'secondary'}>{tag === 'Research' ? '📄 ' + tag : tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={sourceLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
          <Button asChild variant="default" size="sm" className="flex-1">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
          {isResearch && paperLink && (
            <Button asChild variant="secondary" size="sm" className="flex-1">
              <Link href={paperLink} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> Paper
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

    