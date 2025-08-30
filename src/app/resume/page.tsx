import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, BrainCircuit, Code, Star, Wrench, Languages, Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <Card className="max-w-4xl mx-auto p-4 sm:p-8">
            <header className="text-center mb-8">
                <h1 className="font-headline text-4xl font-bold">Mustefa Abrahim</h1>
                <p className="text-lg text-muted-foreground">AI Researcher | DL/ML Engineer | Data Analyst</p>
                <div className="flex justify-center gap-4 mt-4 text-sm">
                    <a href="mailto:example@example.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4"/> email@example.com</a>
                    <a href="#" className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4"/> +1 (123) 456-7890</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Linkedin className="w-4 h-4"/> LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Github className="w-4 h-4"/> GitHub</a>
                </div>
            </header>

            <section className="mb-8">
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2"><BrainCircuit className="w-6 h-6 text-primary"/> Summary</h2>
                <p className="text-muted-foreground">
                    Results-driven Data Scientist and AI Researcher with an M.Tech in Data Science from IIT Madras. Passionate about leveraging Machine Learning, Deep Learning, and NLP to solve complex problems in healthcare and business intelligence. Proven ability to lead projects from concept to deployment.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2"><Briefcase className="w-6 h-6 text-primary"/> Experience</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-lg">Data Analysis and Visualization</h3>
                        <p className="text-sm text-muted-foreground">RBCDSAI Lab IIT Madras, India | June 2023 – Sept 2023</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg">Business Data Analyst</h3>
                        <p className="text-sm text-muted-foreground">FINCRUX Technologies LLP, India | June 2023 – July 2023</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Energy Mentors</h3>
                        <p className="text-sm text-muted-foreground">Energy Mentors, USA, and IIT Ropar India | May 2023 – July 2023</p>
                    </div>
                </div>
            </section>
            
            <section className="mb-8">
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2"><Code className="w-6 h-6 text-primary"/> Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                        <h3 className="font-bold mb-2">Languages</h3>
                        <p className="text-muted-foreground">Python, Java, C++, JavaScript, SQL</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">ML/DL/NLP</h3>
                        <p className="text-muted-foreground">PyTorch, TensorFlow, Scikit-learn, Hugging Face, spaCy, NLTK</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Data Science</h3>
                        <p className="text-muted-foreground">Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau</p>
                    </div>
                     <div>
                        <h3 className="font-bold mb-2">Web Dev</h3>
                        <p className="text-muted-foreground">Django, Flask, Node.js, React</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Databases & Big Data</h3>
                        <p className="text-muted-foreground">MongoDB, MySQL, Apache Spark, Kafka</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Cloud & DevOps</h3>
                        <p className="text-muted-foreground">GCP, Git, Git LFS, Docker</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-primary"/> Education</h2>
                <div className="space-y-2">
                    <div>
                        <h3 className="font-bold text-lg">M.Tech, Data Science and AI</h3>
                        <p className="text-sm text-muted-foreground">IIT Madras, India | 2022 – 2024</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">B.Tech (Honor), Computer Science</h3>
                        <p className="text-sm text-muted-foreground">KIIT, India | 2018 – 2022</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2"><Award className="w-6 h-6 text-primary"/> Certificates</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                    <li>Google Data Analysis Professional Certificate (Coursera)</li>
                    <li>AI for Everyone (DeepLearning.AI)</li>
                    <li>Core Java (Software Development using JavaFX) (Internshala)</li>
                    <li>Machine Learning Foundations (Coursera)</li>
                </ul>
            </section>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
