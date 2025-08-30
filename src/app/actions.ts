"use server";

import { chatbotDeterminesInformation } from "@/ai/flows/chatbot-determines-information";
import { knowledgeBase } from "@/lib/knowledge";

export async function getChatbotResponse(query: string): Promise<string> {
  if (!query) {
    return "Please ask a question.";
  }
  
  try {
    const result = await chatbotDeterminesInformation({
      query,
      knowledgeBase,
    });
    return result.response;
  } catch (error) {
    console.error("Error getting chatbot response:", error);
    return "Sorry, I encountered an error. Please try again.";
  }
}

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  console.log("Form submitted:", formData);
  // Here you would typically send an email or save to a database
  return { success: true, message: "Your message has been sent successfully!" };
}
