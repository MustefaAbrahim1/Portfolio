"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, BookOpen, GitBranch, Cpu, Database, BrainCircuit, Bot, BarChart, FileText, CheckCircle, Handshake, Brain, BriefcaseBusiness, TrendingUp, UserCog, Rocket } from "lucide-react";
import React from "react";

const AnimatedText = () => {
  const roles = [
    "Mustefa Abrahim",
    "Data Scientist",
    "AI Engineer",
    "Business Analyst",
    "Data Analyst",
    "AI Agent Developer",
    "AI Research Enthusiast"
  ];
  const icons = [
    <Handshake className="inline-block h-8 w-8 text-primary" />,
    <Brain className="inline-block h-8 w-8 text-primary" />,
    <UserCog className="inline-block h-8 w-8 text-primary" />,
    <BriefcaseBusiness className="inline-block h-8 w-8 text-primary" />,
    <TrendingUp className="inline-block h-8 w-8 text-primary" />,
    <Bot className="inline-block h-8 w-8 text-primary" />,
    <Rocket className="inline-block h-8 w-8 text-primary" />
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="flex items-center justify-center gap-4">
       <motion.div
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {icons[index]}
      </motion.div>
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="font-headline text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/70"
      >
        {roles[index]}
      </motion.span>
    </div>
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
    { title: "Stock Market Data Analysis Using ML Algorithms", period: "Feb 2022 - May 2023", imageUrl: "https://picsum.photos/600/400?random=1", imageHint: "stock market analysis" },
    { title: "Predictive Analytics for Health Insurance Sales using ML", period: "Jan 2023 - March 2023", imageUrl: "https://picsum.photos/600/400?random=2", imageHint: "health insurance predictive" },
    { title: "Credit Card Fraud Detection using ML Algorithm", period: "Jun 2023 - July 2023", imageUrl: "https://picsum.photos/600/400?random=3", imageHint: "fraud detection security" },
  ],
  dl: [
    { title: "Covid-19 Detection using DL from Radiological Images", period: "Jan 2021 - June 2022", imageUrl: "https://picsum.photos/600/400?random=5", imageHint: "covid detection medical" },
    { title: "Kidney Stone Detection using DL from CT-scan Images", period: "June 2023 - June 2024", imageUrl: "https://picsum.photos/600/400?random=6", imageHint: "kidney stone detection" },
    { title: "Image2Image Translation using CGAN, CycleGAN", period: "N/A", imageUrl: "https://picsum.photos/600/400?random=7", imageHint: "image translation gan" },
    { title: "Realistic Image Generation using Diffusion", period: "N/A", imageUrl: "https://picsum.photos/600/400?random=8", imageHint: "image generation diffusion" },
  ],
  bigData: [
    { title: "Big Data Project – NYC Parking Tickets Prediction", period: "Feb 2023 - May 2023", imageUrl: "https://picsum.photos/600/400?random=9", imageHint: "big data nyc" },
  ],
  nlp: [
    { title: "Information Retrieval System from Scratch (NLP-Project-2024)", period: "March 2024 - May 2024", imageUrl: "https://picsum.photos/600/400?random=10", imageHint: "information retrieval nlp" },
    { title: "Customization of AI-Content Generation for Social Media Influencer", period: "June 2025 - Aug 2025", imageUrl: "https://picsum.photos/600/400?random=11", imageHint: "ai content generation" },
    { title: "Retrieval-Augmented Generation (RAG)", period: "N/A", imageUrl: "https://picsum.photos/600/400?random=12", imageHint: "rag system architecture" },
    { title: "Sentiment Analysis", period: "N/A", imageUrl: "https://picsum.photos/600/400?random=13", imageHint: "sentiment analysis chart" },
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
    { title: "Exploring the Impact of AI on Kidney Stone Detection — A Comprehensive Review", journal: "Computers in Biology and Medicine", status: "Under Review" }
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

const Section = ({ id, title, icon, children }: {id: string, title: string, icon: React.ReactNode, children: React.ReactNode}) => (
    <section id={id} className="my-12 md:my-20">
        <motion.h2 
          className="font-headline text-2xl md:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {icon} {title}
        </motion.h2>
        {children}
      </section>
)

export default function PageClient() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <motion.section 
        className="text-center my-12 md:my-20 h-24 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tighter mb-4">
          Hi, Welcome to
        </h1>
        <AnimatedText />
      </motion.section>

      <Section id="research-interests" title="Research Interests" icon={<BrainCircuit className="w-8 h-8" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="text-primary">{React.cloneElement(interest.icon, { className: "w-6 h-6"})}</div>
                            <p className="font-semibold text-sm">{interest.text}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>

      <Section id="projects" title="Project / Research Works" icon={<BookOpen className="w-8 h-8" />}>
        {(Object.keys(projects) as Array<keyof typeof projects>).map((category) => (
            <div key={category} className="mb-12">
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-6 capitalize flex items-center gap-3">
                    {category === 'ml' && <Brain className="w-6 h-6" />}
                    {category === 'dl' && <Cpu className="w-6 h-6" />}
                    {category === 'bigData' && <Database className="w-6 h-6" />}
                    {category === 'nlp' && <Bot className="w-6 h-6" />}
                    {category === 'ml' ? 'Machine Learning' : category === 'dl' ? 'Deep Learning' : category === 'bigData' ? 'Big Data' : 'NLP'} Projects
                </h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {projects[category].map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={`Period: ${project.period}`} imageUrl={project.imageUrl} imageHint={project.imageHint} tags={[]} />
                  ))}
                </motion.div>
            </div>
        ))}
      </Section>
      
      <Section id="experience" title="Work / Professional Experience" icon={<Briefcase className="w-8 h-8" />}>
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary group-odd:order-1 group-odd:group-first:translate-x-1/2 group-odd:group-last:translate-x-1/2 md:group-odd:order-none">
                     <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                      <Card>
                          <CardHeader>
                              <CardTitle className="text-base">{exp.role}</CardTitle>
                              <CardDescription>{exp.company}</CardDescription>
                              <p className="text-xs text-muted-foreground">{exp.period}</p>
                          </CardHeader>
                      </Card>
                  </div>
              </motion.div>
            ))}
        </div>
      </Section>
      
      <Section id="education" title="Education" icon={<GraduationCap className="w-8 h-8" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educations.map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-base"><GraduationCap className="w-5 h-5 text-primary"/>{edu.degree}</CardTitle>
                            <CardDescription>{edu.institution}</CardDescription>
                            <p className="text-xs text-muted-foreground pt-2">{edu.period}</p>
                        </CardHeader>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>

      <Section id="certificates" title="Certificates" icon={<Award className="w-8 h-8" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                      <Card className="h-full">
                          <CardHeader>
                              <CardTitle className="text-base">{cert.title}</CardTitle>
                              <CardDescription>{cert.provider} - {cert.date}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">View Certificate</a>
                          </CardContent>
                      </Card>
                  </motion.div>
              ))}
          </div>
      </Section>
      
      <Section id="success-stories" title="Success Stories" icon={<CheckCircle className="w-8 h-8" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full">
                        <CardContent className="p-6 flex items-center gap-4">
                            <CheckCircle className="w-6 h-6 text-green-500"/>
                            <p className="text-sm">{story}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>
      
      <Section id="training" title="Training" icon={<Briefcase className="w-8 h-8" />}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainings.map((training, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="text-base">{training.title}</CardTitle>
                            <CardDescription>{training.provider}</CardDescription>
                            <p className="text-xs text-muted-foreground pt-2">{training.period}</p>
                        </CardHeader>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>
      
      <Section id="publications" title="Publications" icon={<FileText className="w-8 h-8" />}>
         <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">{pub.title}</CardTitle>
                            <CardDescription>Journal: {pub.journal}</CardDescription>
                             <Badge className="w-fit mt-2">{pub.status}</Badge>
                        </CardHeader>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>

    </div>
  );
}
