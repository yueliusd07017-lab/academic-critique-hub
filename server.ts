import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

// Shared backend variables
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini Client server-side
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Academic Argument & Bias Analyzer Endpoint
  app.post("/api/gemini/analyze", async (req, res) => {
    try {
      const { text, contextType } = req.body;
      if (!text || typeof text !== "string") {
        res.status(400).json({ error: "Missing required string parameter: text" });
        return;
      }

      const systemPrompt = `You are an elite, objective, and intellectually rigorous academic critique system.
Your goal is to parse and expose defensive rhetorical maneuvers, structural fallacies, academic tone-policing, and "academic alchemy" patterns commonly used to protect established dogmas or dodge valid empirical/logical errors from critics.
You must analyze the incoming text (which can be an academic defense, reviewer letter, or theoretical claim) and output a structured analysis in JSON format.

The JSON response MUST strictly follow this schema:
{
  "biasScore": <number between 0 and 100 representing level of defensive/institutional bias>,
  "maneuversDetected": [<string, name of maneuvers like "Tone-Policing", "Dogma Defense", "Systemic Gaze Deflection", "False Equivalency", "Sacrificing Locality">],
  "structuralCritique": <string, precise and elegant 2-3 sentence logical deconstruction of the statement>,
  "fallacyBreakdown": [
    {
      "fallacy": <string, name of fallacy/deflection>,
      "explanation": <string, how it is committed in the provided text>,
      "severity": <string, "High", "Medium", or "Low">
    }
  ],
  "alternativeScientificStance": <string, how a genuinely transparent and truth-seeking scientist would respond to this criticism instead>
}`;

      const promptText = `Analyze the following academic excerpt or review comment:\nCONTEXT TYPE: ${contextType || "General Academic Expression"}\n\nTEXT:\n"${text}"\n\nReturn the structured response.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptText,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              biasScore: {
                type: Type.NUMBER,
                description: "A score from 0 to 100 on how defensive, non-empirical, or biased the text is."
              },
              maneuversDetected: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of tactical academic maneuvers detected (e.g., Tone-Policing, Institutional Deflection, Dogma Shielding)."
              },
              structuralCritique: {
                type: Type.STRING,
                description: "A rigorous, elegant deconstruction of the quote's core logical flaws."
              },
              fallacyBreakdown: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    fallacy: { type: Type.STRING },
                    explanation: { type: Type.STRING },
                    severity: { type: Type.STRING }
                  },
                  required: ["fallacy", "explanation", "severity"]
                },
                description: "Array explaining each specific logical fallacy or academic deflection tactic present."
              },
              alternativeScientificStance: {
                type: Type.STRING,
                description: "An elegant, intellectually honest model response focusing on truth and correction rather than deflection."
              }
            },
            required: ["biasScore", "maneuversDetected", "structuralCritique", "fallacyBreakdown", "alternativeScientificStance"]
          }
        }
      });

      const resultText = response.text || "{}";
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(resultText);
    } catch (error: any) {
      console.error("Gemini API Error in analyze endpoint:", error);
      res.status(500).json({ error: error.message || "An error occurred with Gemini processing." });
    }
  });

  // Vite Middleware for development, static assets for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Start Server on PORT 3000
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Academic Critique Server] online at http://0.0.0.0:${PORT} under NODE_ENV=${process.env.NODE_ENV || "development"}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server startup failure:", err);
});
