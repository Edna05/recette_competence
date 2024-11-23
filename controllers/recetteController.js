import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Ajouter une recette
export const ajouterRecette = async (req, res) => {
  try {
    const { titre, description, ingredients, etapes, image, temps_cuisson, minuteur, portions, utilisateur_id } = req.body;

    // Vérification des données entrantes
    if (!titre || !description || !ingredients || !etapes || !utilisateur_id) {
      return res.status(400).json({ erreur: "Tous les champs sont obligatoires." });
    }

    // Création de la recette
    const recette = await prisma.recettes.create({
      data: {
        titre,
        description,
        ingredients,
        etapes,
        image,
        temps_cuisson,
        minuteur,
        portions,
        utilisateur_id,
      },
    });

    res.status(201).json({ message: "Recette ajoutée avec succès.", recette });
  } catch (erreur) {
    console.error('Erreur lors de l\'ajout de la recette:', erreur); // Log de l'erreur
    res.status(500).json({ erreur: "Erreur lors de l'ajout de la recette.", details: erreur.message || erreur });
  }
};

// Obtenir toutes les recettes
export const obtenirToutesLesRecettes = async (req, res) => {
  try {
    const recettes = await prisma.recettes.findMany();
    res.status(200).json({ recettes });
  } catch (erreur) {
    console.error('Erreur lors de la récupération des recettes:', erreur); // Log de l'erreur
    res.status(500).json({ erreur: "Erreur lors de la récupération des recettes.", details: erreur.message || erreur });
  }
};

// Mettre à jour une recette
export const mettreAJourRecette = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, description, ingredients, etapes, image, temps_cuisson, minuteur, portions } = req.body;

    // Vérification des données entrantes
    if (!titre || !description || !ingredients || !etapes || !id) {
      return res.status(400).json({ erreur: "Tous les champs sont obligatoires." });
    }

    // Mise à jour de la recette
    const recette = await prisma.recettes.update({
      where: { id: Number(id) },
      data: {
        titre,
        description,
        ingredients,
        etapes,
        image,
        temps_cuisson,
        minuteur,
        portions,
      },
    });

    res.status(200).json({ message: "Recette mise à jour avec succès.", recette });
  } catch (erreur) {
    console.error('Erreur lors de la mise à jour de la recette:', erreur); // Log de l'erreur
    res.status(500).json({ erreur: "Erreur lors de la mise à jour de la recette.", details: erreur.message || erreur });
  }
};

// Supprimer une recette
export const supprimerRecette = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérification de l'existence de la recette avant suppression
    const recette = await prisma.recettes.findUnique({
      where: { id: Number(id) },
    });

    if (!recette) {
      return res.status(404).json({ erreur: "Recette non trouvée." });
    }

    // Suppression de la recette
    await prisma.recettes.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Recette supprimée avec succès." });
  } catch (erreur) {
    console.error('Erreur lors de la suppression de la recette:', erreur); // Log de l'erreur
    res.status(500).json({ erreur: "Erreur lors de la suppression de la recette.", details: erreur.message || erreur });
  }
};

