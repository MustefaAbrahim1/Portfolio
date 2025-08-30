"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, BookOpen, GitBranch, Cpu, Database, BrainCircuit, Bot, BarChart, FileText, CheckCircle, Brain, UserCog, BriefcaseBusiness, TrendingUp, Rocket, Download, Eye } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const AnimatedText = () => {
  const roles = [
    "Data Scientist",
    "AI Engineer",
    "Business Analyst",
    "Data Analyst",
    "AI Agent Developer",
    "AI Research Enthusiast"
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="font-headline text-4xl md:text-6xl font-bold tracking-tighter gradient-text"
      >
        {roles[index]}
    </motion.span>
  );
};

const researchInterests = [
    { text: "Transfer Learning & Representation Learning", icon: <GitBranch/> },
    { text: "Large Language Models (LLMs) & Transformers", icon: <Cpu/> },
    { text: "Reinforcement Learning in AI Applications", icon: <Bot/> },
    { text: "Causal Inference in Machine Learning", icon: <BarChart/> },
    { text: "NLP models like BERT, GPT, and beyond", icon: <FileText/> },
    { text: "AI for Medical Imaging & Healthcare Systems", icon: <BrainCircuit/> }
];

const projects = {
  ml: [
    { title: "Stock Market Data Analysis Using ML Algorithms", period: "Feb 2022 - May 2023", imageUrl: "https://picsum.photos/600/400", imageHint: "stock market analysis", tags: ["Python", "Scikit-learn", "XGBoost"] },
    { title: "Predictive Analytics for Health Insurance Sales using ML", period: "Jan 2023 - March 2023", imageUrl: "https://picsum.photos/600/401", imageHint: "health insurance predictive", tags: ["Machine Learning", "Classification"] },
    { title: "Credit Card Fraud Detection using ML Algorithm", period: "Jun 2023 - July 2023", imageUrl: "https://picsum.photos/600/402", imageHint: "fraud detection security", tags: ["Fraud Detection", "ML"] },
  ],
  dl: [
    { title: "Covid-19 Detection using DL from Radiological Images", period: "Jan 2021 - June 2022", imageUrl: "https://picsum.photos/600/403", imageHint: "covid detection medical", tags: ["Deep Learning", "Healthcare", "CNN"] },
    { title: "Kidney Stone Detection using DL from CT-scan Images", period: "June 2023 - June 2024", imageUrl: "https://picsum.photos/600/404", imageHint: "kidney stone detection", tags: ["Computer Vision", "PyTorch"] },
    { title: "Image2Image Translation using CGAN, CycleGAN", period: "N/A", imageUrl: "https://picsum.photos/600/405", imageHint: "image translation gan", tags: ["GANs", "Image Generation"] },
    { title: "Realistic Image Generation using Diffusion", period: "N/A", imageUrl: "https://picsum.photos/600/406", imageHint: "image generation diffusion", tags: ["Diffusion Models", "AI Art"] },
  ],
  bigData: [
    { title: "Big Data Project – NYC Parking Tickets Prediction", period: "Feb 2023 - May 2023", imageUrl: "https://picsum.photos/600/407", imageHint: "big data nyc", tags: ["Big Data", "Spark", "PySpark"] },
  ],
  nlp: [
    { title: "Information Retrieval System from Scratch (NLP-Project-2024)", period: "March 2024 - May 2024", imageUrl: "https://picsum.photos/600/408", imageHint: "information retrieval nlp", tags: ["NLP", "Search", "Python"] },
    { title: "Customization of AI-Content Generation for Social Media Influencer", period: "June 2025 - Aug 2025", imageUrl: "https://picsum.photos/600/409", imageHint: "ai content generation", tags: ["Generative AI", "LLMs"] },
    { title: "Retrieval-Augmented Generation (RAG)", period: "N/A", imageUrl: "https://picsum.photos/600/410", imageHint: "rag system architecture", tags: ["RAG", "LLMs"] },
    { title: "Sentiment Analysis", period: "N/A", imageUrl: "https://picsum.photos/600/411", imageHint: "sentiment analysis chart", tags: ["Sentiment Analysis", "NLP"] },
  ],
};

const experiences = [
    { role: "Business Data Analyst", company: "FINCRUX Technologies LLP, India", period: "June 05, 2023 – July 05, 2023" },
    { role: "Data Analysis and Visualization", company: "RBCDSAI Lab IIT Madras, India", period: "June 1, 2023 – Sept 30, 2023" },
    { role: "Energy Mentors", company: "Energy Mentors, USA, and IIT Ropar India", period: "May 21, 2023 – July 24, 2023" },
    { role: "Credit Card Fraud Detection", company: "CodeClause, India", period: "Jun 2023 – July 2023" },
    { role: "Software Development Intern", company: "Internshala, India", period: "May 2021 - June 2021" },
    { role: "Web Development Intern", company: "Internshala, India", period: "Sept 2019 - Nov 2019" },
];

const educations = [
    { degree: "Master Degree in Data Science and AI", institution: "IIT Madras, India", period: "2022 – 2024" },
    { degree: "Bachelor Degree (honour) in Computer science", institution: "KIIT, India", period: "2018 – 2022" },
    { degree: "Bachelor in Software Engineering", institution: "Jigjiga University, Ethiopia", period: "2016-2017" },
];

const certificates = [
    { title: "Google data analysis professional", provider: "Coursera", date: "Jun 20, 2022", link: "https://coursera.org/verify/professional-cert/T4XKK3KSX36P" },
    { title: "AI for everyone", provider: "DeepLearning.AI", date: "Aug 30, 2021", link: "https://coursera.org/verify/E8HKCQ6L258G" },
    { title: "Core Java (Software Development using JavaFX)", provider: "Internshala", date: "June 15, 2021", link: "https://trainings.internshala.com/verify_certificate" },
    { title: "Entrepreneurship I", provider: "Coursera", date: "Aug 30, 2021", link: "https://coursera.org/verify/KWVB86TYUZHC" },
    { title: "Entrepreneurship II", provider: "Coursera", date: "Sept 29, 2021", link: "https://coursera.org/verify/TT24AQEHXHRU" },
    { title: "Machine Learning Foundations", provider: "Coursera", date: "Dec 20, 2020", link: "https://coursera.org/verify/LFF2SPPBT4PN" },
    { title: "Web Development", provider: "Internshala", date: "Nov 11, 2019", link: "#" },
];

const successStories = [
    "Double Scholar, hold honour degree",
    "Betra Science Scholar from Jigjiga University, Ethiopia to KIIT University India by MoE of Ethiopian",
    "Achieved Honor Degree in Computer Science with highest cgpa 3.84/4 from KIIT",
    "I2MP Scholar at IIT Madras which is number one NIRF and 200+ in QS Rank",
    "Master Degree in Data Science and AI 2024 batch of IIT madras"
];

const trainings = [
    { title: "Concept Building in AI based Power Electronics and Power Systems", provider: "KIIT School of Electronics", period: "July 6 – July 25, 2020" },
    { title: "Generative AI and Computer Vision in Healthcare: Deploy using Creative Applications", provider: "NIELIT, DELHI CENTRE", period: "21 July 2023" },
];

const publications = [
    { title: "Exploring the Impact of AI on Kidney Stone Detection — A Comprehensive Review", journal: "Computers in Biology and Medicine", status: "Under Review", link: "#" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const Section = ({ id, title, icon, children, className }: {id: string, title?: string, icon?: React.ReactNode, children: React.ReactNode, className?: string}) => (
    <section id={id} className={cn("py-16 md:py-24", className)}>
        <div className="container mx-auto px-4 md:px-6">
        {title && (
            <motion.h2 
            className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            >
            {icon} {title}
            </motion.h2>
        )}
        {children}
        </div>
      </section>
)

export default function PageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-[#0d1117] via-[#10141b] to-teal-900/40 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="font-headline text-xl md:text-2xl font-light tracking-wide mb-4">
                  Hi, I’m Mustefa Abrahim
                </h1>
                <AnimatedText />
                <p className="max-w-2xl mx-auto mt-4 text-neutral-300">
                    Building the Future with AI, One Model at a Time
                </p>
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="#projects">View Projects</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href="/resume">Download CV</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <Link href="/contact">Hire Me</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <Section id="about" className="bg-background">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
              >
                  <div className="relative aspect-square w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl">
                      <Image src="https://picsum.photos/500/500" alt="Mustefa Abrahim" layout="fill" objectFit="cover" data-ai-hint="professional portrait" />
                  </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                  <h2 className="font-headline text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-muted-foreground mb-6">
                      I'm a data scientist and AI researcher with an M.Tech in Data Science and a B.Tech (Honor) in Computer Science. My passion lies at the intersection of Machine Learning, Deep Learning, NLP, Computer Vision, and their applications in Healthcare and Business Intelligence.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary" /> <span>AI Engineer</span></div>
                      <div className="flex items-center gap-2"><BrainCircuit className="w-5 h-5 text-secondary" /> <span>AI Research</span></div>
                      <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-accent" /> <span>Data Science</span></div>
                  </div>
              </motion.div>
          </div>
      </Section>
      
      {/* Research Interests Section */}
      <Section id="research" title="Research Interests" icon={<BrainCircuit className="w-8 h-8" />} className="bg-muted">
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {researchInterests.map((interest) => (
                <motion.div key={interest.text} variants={itemVariants}>
                    <Card className="h-full hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="text-primary">{React.cloneElement(interest.icon, { className: "w-8 h-8"})}</div>
                            <p className="font-semibold">{interest.text}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Project Works" icon={<Rocket className="w-8 h-8" />} className="bg-background">
        {(Object.keys(projects) as Array<keyof typeof projects>).map((category) => (
            <div key={category} className="mb-16">
                <h3 className="font-headline text-2xl font-bold mb-8 capitalize flex items-center gap-3">
                    {category === 'ml' && <Brain className="w-6 h-6 text-primary" />}
                    {category === 'dl' && <Cpu className="w-6 h-6 text-primary" />}
                    {category === 'bigData' && <Database className="w-6 h-6 text-primary" />}
                    {category === 'nlp' && <Bot className="w-6 h-6 text-primary" />}
                    {category === 'ml' ? 'Machine Learning' : category === 'dl' ? 'Deep Learning' : category === 'bigData' ? 'Big Data' : 'NLP'} Projects
                </h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {projects[category].map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={`Period: ${project.period}`} imageUrl={project.imageUrl} imageHint={project.imageHint} tags={project.tags} />
                  ))}
                </motion.div>
            </div>
        ))}
      </Section>
      
      {/* Work Experience Section */}
      <Section id="experience" title="Work Experience" icon={<Briefcase className="w-8 h-8" />} className="bg-muted">
         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background text-primary group-odd:order-1 group-odd:group-first:translate-x-1/2 group-odd:group-last:translate-x-1/2 md:group-odd:order-none">
                     <BriefcaseBusiness className="w-5 h-5"/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                      <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                              <CardTitle className="text-lg">{exp.role}</CardTitle>
                              <CardDescription>{exp.company}</CardDescription>
                              <p className="text-xs text-muted-foreground pt-1">{exp.period}</p>
                          </CardHeader>
                      </Card>
                  </div>
              </motion.div>
            ))}
        </div>
      </Section>
      
      {/* Education Section */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-8 h-8" />} className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educations.map((edu, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3"><GraduationCap className="w-6 h-6 text-primary"/>{edu.degree}</CardTitle>
                            <CardDescription>{edu.institution}</CardDescription>
                            <p className="text-sm text-muted-foreground pt-2">{edu.period}</p>
                        </CardHeader>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications" icon={<FileText className="w-8 h-8" />} className="bg-muted">
         <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {publications.map((pub, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-card hover:bg-card/95">
                        <CardHeader>
                            <CardTitle className="font-serif">{pub.title}</CardTitle>
                            <CardDescription>Journal: {pub.journal}</CardDescription>
                            <div className="flex items-center justify-between pt-2">
                                <Badge className="w-fit">{pub.status}</Badge>
                                <Button asChild variant="link">
                                    <Link href={pub.link} target="_blank">Read More</Link>
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
      </Section>

      {/* Certificates Section */}
      <Section id="certificates" title="Training & Certificates" icon={<Award className="w-8 h-8" />} className="bg-background">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
              {certificates.map((cert, index) => (
                  <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full">
                           <CardHeader>
                              <CardTitle className="text-lg">{cert.title}</CardTitle>
                              <CardDescription>{cert.provider} - {cert.date}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button asChild variant="default" size="sm">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                            </Button>
                          </CardContent>
                      </Card>
                  </motion.div>
              ))}
          </motion.div>
      </Section>
      
      {/* Success Stories Section */}
      <Section id="success-stories" title="Success Stories" icon={<CheckCircle className="w-8 h-8" />} className="bg-muted">
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {successStories.map((story, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border-green-500/20">
                        <CardContent className="p-6 flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-green-500 mt-1"/>
                            <p>{story}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
      </Section>
      
    </>
  );
}
