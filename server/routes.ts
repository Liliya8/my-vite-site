import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);

  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        data: contactMessage
      });
    } catch (error: any) {
      // Return error response
      res.status(400).json({
        success: false,
        message: error.message || "Failed to send message"
      });
    }
  });

  return httpServer;
}
