import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { TRENDING_PRODUCTS, FEATURED_COLLECTIONS } from '../constants';

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

// Initialize Gemini client safely
const getAiClient = () => {
  if (!ai && API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
  return ai;
};

// Start a chat session with context about the products
export const startChatSession = () => {
  const client = getAiClient();
  if (!client) return null;

  // Create a product context string
  const productContext = TRENDING_PRODUCTS.map(p => 
    `- "${p.title}" ($${p.price}): ${p.category}`
  ).join('\n');
  
  const collectionContext = FEATURED_COLLECTIONS.map(c => 
    `- ${c.title}: ${c.subtitle}`
  ).join('\n');

  const systemInstruction = `You are "StrideBot", a high-end Sneaker & Style Expert for the luxury brand "Stride & Style".
  
  Our Brand Voice: Sophisticated, urban, knowledgeable, and helpful. We target adults 25-45 who value premium quality and aesthetics.
  
  Our Collections:
  ${collectionContext}

  Our Trending Products:
  ${productContext}
  
  Your goal is to help customers find the perfect pair of shoes for their lifestyle, outfit, or occasion.
  - Suggest products based on user needs (e.g., "good for standing all day", "matches a suit", "sustainable").
  - Use our specific product names when making recommendations.
  - If asked about something we don't have, suggest the closest alternative from our collections or offer general styling advice relevant to our urban luxury aesthetic.
  - Keep responses concise and stylish.`;

  chatSession = client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
    },
  });

  return chatSession;
};

// Send message to the chat
export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    startChatSession();
  }
  
  if (!chatSession) {
    return "I'm sorry, I can't connect to the AI service right now. Please check your API key.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you say it again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble thinking right now. Please try again later.";
  }
};
