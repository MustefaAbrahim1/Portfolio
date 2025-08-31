
"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, BookOpen, GitBranch, Cpu, Database, BrainCircuit, Bot, BarChart, FileText, CheckCircle, Brain, UserCog, BriefcaseBusiness, TrendingUp, Rocket, Download, Eye, School } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <motion.h1
      key={roles[index]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="font-headline text-4xl md:text-6xl font-bold tracking-tighter"
    >
      <span className="gradient-text">{roles[index]}</span>
    </motion.h1>
  );
};

const researchInterests = [
    { text: "AI for Healthcare & Medical Imaging", icon: <BrainCircuit/> },
    { text: "NLP (BERT, LLMs, RAG, Multi-Agent)", icon: <Bot/> },
    { text: "Computer Vision & Generative AI", icon: <Eye/> },
    { text: "AI for Business Decision Support", icon: <BriefcaseBusiness /> },
    { text: "Big Data & Predictive Analytics", icon: <Database/> },
    { text: "Transfer Learning & Representation Learning", icon: <GitBranch/> },
];

const projects = {
  ml: [
    { 
      title: "Stock Market Data Analysis using ML Algorithms", 
      period: "Feb 2022 – May 2023",
      description: "Developed ML models to analyze and predict stock price trends. Applied regression, time series forecasting, and ensemble methods for performance improvement.", 
      imageUrl: "https://placehold.co/600x400/0D1117/FFFFFF/png?text=Stock+Analysis", 
      imageHint: "stock market analysis", 
      tags: ["Python", "Pandas", "Scikit-learn", "Statsmodels"] 
    },
    { 
      title: "Predictive Analytics for Health Insurance Sales", 
      period: "Jan 2023 – Mar 2023", 
      description: "Built predictive models for customer acquisition and sales forecasting. Identified key features driving insurance purchases.",
      imageUrl: "https://placehold.co/600x400/007BFF/FFFFFF/png?text=Insurance+AI", 
      imageHint: "health insurance predictive", 
      tags: ["Python", "Random Forest", "XGBoost", "Power BI"] 
    },
    { 
      title: "Credit Card Fraud Detection using ML", 
      period: "Jun 2023 – Jul 2024", 
      description: "Designed ML pipelines to detect fraudulent transactions from imbalanced datasets. Achieved high recall and precision through feature engineering + resampling techniques.",
      imageUrl: "https://placehold.co/600x400/C90000/FFFFFF/png?text=Fraud+Detection", 
      imageHint: "fraud detection security", 
      tags: ["Python", "Scikit-learn", "Imbalanced-learn", "Flask", "Research"] 
    },
  ],
  dl: [
    { 
      title: "Covid-19 Detection from Radiological Images", 
      period: "Jan 2021 – Jun 2022",
      description: "Built CNN models to classify X-ray/CT scans into Covid-positive/negative. Improved diagnosis support for radiologists with >85% accuracy.", 
      imageUrl: "https://placehold.co/600x400/6C63FF/FFFFFF/png?text=Medical+Imaging", 
      imageHint: "covid detection medical", 
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Research"] 
    },
    { 
      title: "Kidney Stone Detection from CT Scans", 
      period: "Jun 2023 – Jun 2024", 
      description: "Developed automated detection pipeline using CNN & image preprocessing. Achieved reliable classification for medical decision support.",
      imageUrl: "https://placehold.co/600x400/6C63FF/FFFFFF/png?text=CT+Scan+AI", 
      imageHint: "kidney stone detection", 
      tags: ["Python", "TensorFlow", "Image Processing", "Research"] 
    },
    { 
      title: "Image-to-Image Translation with GANs", 
      period: "Nov 2023 – Dec 2024",
      description: "Converted RGB → Thermal images using generative models (CycleGAN, cGAN). Enhanced computer vision applications in surveillance and medical imaging.", 
      imageUrl: "https://placehold.co/600x400/00C9A7/FFFFFF/png?text=GANs", 
      imageHint: "image translation gan", 
      tags: ["PyTorch", "CycleGAN", "cGAN", "Research"] 
    },
    { 
      title: "Realistic Image Generation using Diffusion Models", 
      period: "Aug 2023 – Sept 2024",
      description: "Trained diffusion models to generate realistic hair follicle images. Contributed to medical research dataset augmentation.", 
      imageUrl: "https://placehold.co/600x400/00C9A7/FFFFFF/png?text=Diffusion+Models", 
      imageHint: "image generation diffusion", 
      tags: ["PyTorch", "Diffusion Models", "Generative AI", "Research"] 
    },
  ],
  bigData: [
    { 
      title: "NYC Parking Tickets Prediction", 
      period: "Feb 2023 – May 2023",
      description: "Processed 10M+ records to predict parking violations. Leveraged Spark ML pipelines for scalable predictions.",
      imageUrl: "https://placehold.co/600x400/F8B400/FFFFFF/png?text=Big+Data+NYC", 
      imageHint: "big data nyc", 
      tags: ["PySpark", "Hadoop", "Spark ML"] 
    },
     { 
      title: "Hashing in Hadoop Distributed File System", 
      period: "Jan 2023 – Feb 2023",
      description: "Implemented efficient hashing techniques for data distribution. Optimized HDFS performance in large-scale data handling.",
      imageUrl: "https://placehold.co/600x400/F8B400/FFFFFF/png?text=Hadoop", 
      imageHint: "hadoop distributed file", 
      tags: ["Hadoop", "Java", "MapReduce"] 
    },
     { 
      title: "Subscriber Data Management", 
      period: "Nov 2023 – Dec 2023",
      description: "Designed Big Data pipelines for telecom subscriber analytics. Handled ingestion, cleaning, and transformation for large-scale user datasets.",
      imageUrl: "https://placehold.co/600x400/F8B400/FFFFFF/png?text=Data+Pipelines", 
      imageHint: "telecom data management", 
      tags: ["Hadoop", "Hive", "Sqoop", "Spark"] 
    },
  ],
  nlp: [
    { 
      title: "Custom AI Content Generator for Social Media", 
      period: "Jun 2025 – Aug 2025",
      description: "Built AI-powered content generation tool customized for influencers. Delivered multi-lingual, platform-specific post ideas.", 
      imageUrl: "https://placehold.co/600x400/3B5998/FFFFFF/png?text=AI+Content", 
      imageHint: "ai content generation", 
      tags: ["Python", "NLP", "LLM APIs", "Flask"] 
    },
    { 
      title: "Retrieval-Augmented Generation (RAG)", 
      period: "May 2025 – Present",
      description: "Implemented RAG pipelines to combine retrieval systems with LLMs. Enhanced accuracy of AI responses by grounding in external data.",
      imageUrl: "https://placehold.co/600x400/1DA1F2/FFFFFF/png?text=RAG+System", 
      imageHint: "rag system architecture", 
      tags: ["Python", "LangChain", "FAISS", "Transformers", "Research"] 
    },
    { 
      title: "Information Retrieval System (From Scratch)", 
      period: "Mar 2024 – May 2024",
      description: "Designed a search engine prototype with custom ranking algorithms. Experimented with TF-IDF, BM25, and semantic search.",
      imageUrl: "https://placehold.co/600x400/FF6F61/FFFFFF/png?text=Search+Engine", 
      imageHint: "information retrieval nlp", 
      tags: ["Python", "Elasticsearch", "NLP", "Research"] 
    },
    { 
      title: "Sentiment Analysis on Text Data", 
      period: "Feb 2025 – May 2025",
      description: "Built models to classify positive/negative/neutral sentiment. Applied on Twitter datasets for social media opinion mining.",
      imageUrl: "https://placehold.co/600x400/FFD700/000000/png?text=Sentiment+Analysis", 
      imageHint: "sentiment analysis chart", 
      tags: ["Python", "BERT", "HuggingFace Transformers"] 
    },
  ],
};

const experiences = [
    { 
        role: "Business Data Analyst", 
        company: "FINCRUX Technologies LLP, India", 
        period: "June 2023 – July 2023",
        description: [
            "Conducted financial data analysis and prepared insights for investment decisions.",
            "Designed interactive dashboards to visualize market trends and risks.",
            "Collaborated with senior analysts on predictive modeling for portfolio optimization."
        ],
        skills: ["Python", "Pandas", "Excel", "Power BI", "SQL", "Financial Analytics"]
    },
    { 
        role: "Data Analysis & Visualization Intern", 
        company: "RBCDSAI Lab, IIT Madras, India", 
        period: "June 2023 – Sept 2023",
        description: [
            "Analyzed large-scale datasets from AI/ML research projects.",
            "Developed visualization dashboards to track experiment performance.",
            "Contributed to research documentation for AI-driven insights."
        ],
        skills: ["Python", "Matplotlib", "Seaborn", "Tableau", "Jupyter", "Data Cleaning"]
    },
    { 
        role: "AI Research Intern", 
        company: "Energy Mentors, USA & IIT Ropar, India", 
        period: "May 2023 – July 2023",
        description: [
            "Applied AI/ML models for energy optimization and forecasting.",
            "Processed large energy datasets to improve sustainability insights.",
            "Contributed to joint research publications in AI for energy systems."
        ],
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Data Engineering"]
    },
    { 
        role: "Credit Card Fraud Detection Project", 
        company: "CodeClause, India", 
        period: "June 2023 – July 2023",
        description: [
            "Implemented machine learning algorithms to detect fraudulent transactions.",
            "Achieved high accuracy using imbalanced dataset handling & feature engineering.",
            "Delivered end-to-end data pipeline and model deployment."
        ],
        skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Fraud Detection", "ML Deployment"]
    },
    { 
        role: "Software Development Intern", 
        company: "Internshala, India", 
        period: "May 2021 – June 2021",
        description: [
            "Built backend modules for student learning platform.",
            "Improved code efficiency and fixed bugs in live production codebase.",
            "Learned agile development and collaboration with remote teams."
        ],
        skills: ["Java", "MySQL", "Git", "REST APIs", "Software Engineering"]
    },
    { 
        role: "Web Development Intern", 
        company: "Internshala, India", 
        period: "Sept 2019 – Nov 2019",
        description: [
            "Designed and developed responsive web pages for client projects.",
            "Implemented front-end features improving user interaction.",
            "Gained practical exposure to real-world web development cycle."
        ],
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Web Hosting"]
    },
];

const educations = [
    { 
        degree: "M.Tech / M.Sc. in Data Science & AI", 
        institution: "IIT Madras, India",
        institutionLink: "https://www.iitm.ac.in/",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
        period: "2022 – 2024",
        description: [
            "Specialized in Machine Learning, Deep Learning, Computer Vision, and NLP.",
            "Conducted publication-ready research in AI for Healthcare and Business Analytics.",
            "Completed capstone AI/ML projects on predictive modeling, large-scale data pipelines, and transformer-based NLP."
        ],
        skills: ["Python", "TensorFlow", "PyTorch", "Big Data"]
    },
    { 
        degree: "B.Tech / B.Sc. (Hons) in Computer Science", 
        institution: "KIIT University, India",
        institutionLink: "https://kiit.ac.in/",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/KIIT_logo.svg/1200px-KIIT_logo.svg.png",
        period: "2018 – 2022",
        description: [
            "Achieved Highest CGPA: 3.84/4, graduating with Honors degree.",
            "Completed advanced coursework in Algorithms, Database Systems, Operating Systems, and Software Engineering.",
            "Built projects in AI, Web Development, and Cloud Computing."
        ],
        skills: ["Algorithms", "Databases", "Software Engineering"]
    },
    { 
        degree: "B.Sc. in Software Engineering (1 Year)", 
        institution: "Jigjiga University, Ethiopia",
        institutionLink: "https://www.jju.edu.et/",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/cb/Jigjiga_University_logo.png",
        period: "2016 – 2017",
        description: [
            "Completed Year-1 coursework in Software Engineering.",
            "Scored highest GPA: 3.79/4 in the 1st semester.",
            "Awarded Scholarship from Ministry of Education, Ethiopia for academic excellence.",
            "Later transferred to KIIT University, India, and completed the B.Sc. (Hons) in Computer Science."
        ],
        skills: ["Software Engineering Fundamentals"]
    },
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
  const aboutSkills = ["Python", "PyTorch", "TensorFlow", "NLP", "CV", "Data Viz"];
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background via-[#0a0d12] to-teal-900/40 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 opacity-50"></div>

        <div className="relative z-10 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="font-headline text-xl md:text-2xl font-light tracking-wide mb-4">
                  Hi, I’m Mustefa Abrahim
                </h2>
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

      {/* About Me & Research Interests Section */}
      <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080/0D1117/FFFFFF/png?text=Researcher+Desk"
            alt="Researcher at desk"
            fill
            className="opacity-20 object-cover"
            data-ai-hint="futuristic researcher desk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
            {/* About Me Panel */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="p-8 rounded-lg shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <h2 className="font-headline text-3xl font-bold mb-4 text-white">About Me</h2>
                    <p className="text-white mb-6">
                      I'm Mustefa Abrahim, a Data Scientist & AI Engineer. My passion lies at the intersection of Machine Learning, Deep Learning, NLP, Computer Vision, and their applications in Healthcare and Business Intelligence.
                    </p>
                    <ul className="space-y-3 text-white mb-6">
                        <li className="flex items-center gap-3"><GraduationCap className="w-5 h-5 text-accent"/> <span>Data Science & AI (IIT Madras, India)</span></li>
                        <li className="flex items-center gap-3"><Bot className="w-5 h-5 text-accent"/> <span>AI-powered Chatbots & Agents</span></li>
                        <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-accent"/> <span>Big Data & Predictive Analytics</span></li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {aboutSkills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                </div>
            </motion.div>

            {/* Research Interests Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div id="research" className="p-8 rounded-lg shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h2 className="font-headline text-3xl font-bold mb-6 text-white">Research Interests</h2>
                  <motion.ul 
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                  >
                      {researchInterests.map((interest) => (
                          <motion.li key={interest.text} variants={itemVariants} className="flex items-center gap-4 text-white font-medium">
                              <div className="text-primary">{React.cloneElement(interest.icon, { className: "w-7 h-7"})}</div>
                              <span>{interest.text}</span>
                          </motion.li>
                      ))}
                  </motion.ul>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Section id="projects" title="Project Works" icon={<Rocket className="w-8 h-8" />} className="bg-background">
        <Tabs defaultValue="ml" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="ml">
              <Brain className="mr-2 h-4 w-4" /> Machine Learning
            </TabsTrigger>
            <TabsTrigger value="dl">
              <Cpu className="mr-2 h-4 w-4" /> Deep Learning
            </TabsTrigger>
            <TabsTrigger value="bigData">
              <Database className="mr-2 h-4 w-4" /> Big Data
            </TabsTrigger>
            <TabsTrigger value="nlp">
              <Bot className="mr-2 h-4 w-4" /> NLP
            </TabsTrigger>
          </TabsList>

          {(Object.keys(projects) as Array<keyof typeof projects>).map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {projects[category].map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    imageUrl={project.imageUrl} 
                    imageHint={project.imageHint} 
                    tags={project.tags} 
                  />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
      
      {/* Work Experience Section */}
       <Section id="experience" title="Work Experience" icon={<Briefcase className="w-8 h-8" />} className="bg-muted">
         <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 gap-8"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
         >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                          <CardTitle className="text-lg">{exp.role}</CardTitle>
                          <CardDescription>{exp.company} | {exp.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                      </CardContent>
                  </Card>
              </motion.div>
            ))}
        </motion.div>
      </Section>
      
      {/* Education Section */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-8 h-8" />} className="bg-background">
        <div className="relative pl-6 before:absolute before:top-0 before:left-6 before:bottom-0 before:w-px before:bg-border">
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {educations.map((edu, index) => (
              <motion.div key={index} className="relative" variants={itemVariants}>
                <div className="absolute -left-[37px] top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <School className="h-5 w-5" />
                </div>
                <div className="pl-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                         {edu.logoUrl && <Image src={edu.logoUrl} alt={`${edu.institution} logo`} width={24} height={24} className="h-6 w-6 object-contain"/>}
                         <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary">
                            {edu.degree}
                         </a>
                      </CardTitle>
                      <CardDescription>
                          {edu.institution} | {edu.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                          {edu.description.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => <Badge key={i}>{skill}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
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


    
    