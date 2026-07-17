import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";

let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY environment variable is required.");
    }
    stripeClient = new Stripe(key);
  }
  return stripeClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { items } = req.body;
      
      if (!items || !items.length) {
        return res.status(400).json({ error: "No items provided" });
      }

      const stripe = getStripe();

      const lineItems = items.map((item: any) => ({
        price_data: {
          currency: "clp",
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      }));

      // Assuming localhost or ngrok proxy
      const origin = req.headers.origin || `http://localhost:${PORT}`;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${origin}?success=true`,
        cancel_url: `${origin}?canceled=true`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      if (error.message.includes("STRIPE_SECRET_KEY")) {
        // Fallback for demo purposes if keys aren't set yet
        res.status(503).json({ 
          error: "Stripe API keys are not configured.", 
          missing_keys: true 
        });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });

  // Vite middleware for development
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
