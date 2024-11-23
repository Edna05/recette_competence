import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from '@prisma/client';
import utilisateurRoutes from "./routes/utilisateurRoute.js";  
import recetteRoutes from "./routes/recetteRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", utilisateurRoutes);
app.use("/api", recetteRoutes);

const connectToDatabase = async () => {
  try {
      await prisma.$connect();
      console.log('Connexion à la base de données établie');
  } catch (error) {
      console.error('Erreur lors de la connexion à la base de donées:', error);
  }
}

connectToDatabase();

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
