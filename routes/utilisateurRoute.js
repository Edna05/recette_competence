import express from "express";
import { inscrireUtilisateur, connecterUtilisateur, obtenirTousLesUtilisateurs, supprimerUtilisateur } from "../controllers/utilisateurController.js";

const utilisateurRoutes = express.Router();

utilisateurRoutes.post("/inscription", inscrireUtilisateur);
utilisateurRoutes.post("/connexion", connecterUtilisateur);
utilisateurRoutes.get("/", obtenirTousLesUtilisateurs);
utilisateurRoutes.delete("/:id", supprimerUtilisateur);

export default utilisateurRoutes;
