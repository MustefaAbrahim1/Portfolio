"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Customer Churn Prediction Using ML",
    description: "Built an end-to-end classification pipeline using Random Forest and XGBoost to predict customer churn. Performed feature engineering, hyperparameter tuning, and model evaluation (AUC: 0.87).",
    imageUrl: "https://picsum.photos/600/400?random=1",
    imageHint: "machine learning churn",
    tags: ["Python", "Scikit-learn", "XGBoost", "Matplotlib"],
    liveLink: "#",
  },
  {
    title: "Diabetic Retinopathy Detection",
    description: "Developed a CNN-based image classifier using transfer learning (EfficientNetB3) to detect diabetic retinopathy from fundus images. Achieved >90% validation accuracy.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    imageHint: "deep learning healthcare",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    liveLink: "#",
  },
  {
    title: "Text Sentiment Analyzer",
    description: "Built a sentiment classification model for YouTube comments using DistilBERT. Includes text preprocessing, fine-tuning, and Streamlit-based deployment.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    imageHint: "nlp transformers",
    tags: ["Python", "Hugging Face", "Streamlit", "NLTK"],
    liveLink: "#",
  },
  {
    title: "Sales Dashboard with Insights",
    description: "Designed a dynamic Power BI dashboard that visualizes sales trends, profit margins, and customer demographics. Integrated SQL backend and Excel datasets.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    imageHint: "dashboard analytics",
    tags: ["Power BI", "SQL", "Excel"],
    liveLink: "#",
  },
  {
    title: "Real-Time Log Analytics",
    description: "Developed a real-time analytics pipeline using Apache Kafka + Spark Streaming to monitor web server logs. Deployed on GCP with alerting system integration.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    imageHint: "big data streaming",
    tags: ["Apache Kafka", "Spark", "PySpark", "GCP"],
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
          Mustefa Abrahim
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          M.Tech Data Science @ IIT Madras | AI Researcher | DL Engineer | ML Engineer | Data Analyst<br/>
          Building the Future with AI, One Model at a Time.
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
          Work Experience and Projects
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
