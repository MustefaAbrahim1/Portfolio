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
