import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import utilisateurRoutes from "./routes/utilisateurRoute.js";  
import recetteRoutes from "./routes/recetteRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", utilisateurRoutes);
app.use("/api", recetteRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
