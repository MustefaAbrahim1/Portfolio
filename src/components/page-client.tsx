"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Project Alpha",
    description: "A comprehensive project management tool designed for agile teams.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    imageHint: "dashboard analytics",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveLink: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform for bespoke furniture with a 3D customizer.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    imageHint: "ecommerce furniture",
    tags: ["React", "Three.js", "Stripe"],
    liveLink: "#",
  },
  {
    title: "Project Gamma",
    description: "A personal blog and portfolio website to showcase work and thoughts.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    imageHint: "blog portfolio",
    tags: ["Next.js", "Framer Motion", "GenAI"],
    liveLink: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PageClient() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
      <motion.section 
        className="text-center my-16 md:my-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/70">
          Creative Developer & Digital Artisan
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          I craft elegant and efficient web experiences, blending cutting-edge technology with user-centric design to bring ideas to life, one line of code at a time.
        </p>
      </motion.section>

      <section id="projects" className="my-16 md:my-24">
        <motion.h2 
          className="font-headline text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
