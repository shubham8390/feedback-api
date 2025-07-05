const { ChatGroq } = require("@langchain/groq");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const dotenv = require("dotenv");


dotenv.config();

// Optional: suppress warnings if needed
process.removeAllListeners('warning');

// Initialize the model
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
});

// Create the chat prompt template
const promptTemplate = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are an expert assistant that specializes in summarizing user feedback. Your job is to read long feedback messages and condense them into a clear, accurate one-sentence summary that captures the core sentiment and main point."
  ],
  ["user", "Summarize the following feedback in one sentence:\n\n{feedback}"],
]);

 async function summarizeFeedback(feedback) {
  try {
    const prompt = await promptTemplate.invoke({ feedback });
    const res = await model.invoke(prompt);
    return res.text.trim();
  } catch (error) {
    console.error("Error summarizing feedback:", error);
    throw error;
  }
}

module.exports = { summarizeFeedback };