// This is a server-side file.
'use server';

/**
 * @fileOverview A chatbot AI agent that uses a knowledge base tool to determine how much information to incorporate into its response.
 *
 * - chatbotDeterminesInformation - A function that handles the chatbot's information incorporation process.
 * - ChatbotDeterminesInformationInput - The input type for the chatbotDeterminesInformation function.
 * - ChatbotDeterminesInformationOutput - The return type for the chatbotDeterminesInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotDeterminesInformationInputSchema = z.object({
  query: z.string().describe('The user query.'),
  knowledgeBase: z.string().describe('The knowledge base content.'),
});
export type ChatbotDeterminesInformationInput = z.infer<typeof ChatbotDeterminesInformationInputSchema>;

const ChatbotDeterminesInformationOutputSchema = z.object({
  response: z.string().describe('The chatbot response.'),
});
export type ChatbotDeterminesInformationOutput = z.infer<typeof ChatbotDeterminesInformationOutputSchema>;

export async function chatbotDeterminesInformation(input: ChatbotDeterminesInformationInput): Promise<ChatbotDeterminesInformationOutput> {
  return chatbotDeterminesInformationFlow(input);
}

const knowledgeBaseTool = ai.defineTool({
  name: 'knowledgeBaseTool',
  description: 'Determines how much information from the knowledge base to incorporate into the response.',
  inputSchema: z.object({
    query: z.string().describe('The user query.'),
    knowledgeBase: z.string().describe('The knowledge base content.'),
  }),
  outputSchema: z.string().describe('The relevant information from the knowledge base.'),
},
async (input) => {
  // In a real application, this would call a service that uses a vector database or other information retrieval technique.
  // This is a placeholder implementation that simply returns the knowledge base content.
  return input.knowledgeBase;
});

const prompt = ai.definePrompt({
  name: 'chatbotDeterminesInformationPrompt',
  input: {schema: ChatbotDeterminesInformationInputSchema},
  output: {schema: ChatbotDeterminesInformationOutputSchema},
  tools: [knowledgeBaseTool],
  prompt: `You are a chatbot assistant. Use the knowledgeBaseTool to determine how much information from the knowledge base to incorporate into its response, so that you don't include irrelevant information.

  User Query: {{{query}}}

  Knowledge Base: {{{knowledgeBase}}}

  Response:`,
});

const chatbotDeterminesInformationFlow = ai.defineFlow(
  {
    name: 'chatbotDeterminesInformationFlow',
    inputSchema: ChatbotDeterminesInformationInputSchema,
    outputSchema: ChatbotDeterminesInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
