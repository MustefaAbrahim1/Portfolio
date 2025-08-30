import Header from "@/components/header";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import PageClient from "@/components/page-client";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <PageClient />
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
