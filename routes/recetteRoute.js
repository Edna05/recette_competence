import express from "express";
import { ajouterRecette, obtenirToutesLesRecettes, mettreAJourRecette, supprimerRecette } from "../controllers/recetteController.js";

const recetteRoutes = express.Router();

recetteRoutes.post("/recette", ajouterRecette);
recetteRoutes.get("/recettes", obtenirToutesLesRecettes);
recetteRoutes.put("/recette/:id", mettreAJourRecette);
recetteRoutes.delete("/recette/:id", supprimerRecette);

export default recetteRoutes;
