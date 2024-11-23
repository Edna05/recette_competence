

// Ajouter une recette
export const ajouterRecette = async (req, res) => {
  try {
    const { titre, description, ingredients, etapes, image, temps_cuisson, minuteur, portions, utilisateur_id } = req.body;

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
    res.status(500).json({ erreur: "Erreur lors de l'ajout de la recette.", details: erreur });
  }
};

// Obtenir toutes les recettes
export const obtenirToutesLesRecettes = async (req, res) => {
  try {
    const recettes = await prisma.recettes.findMany();
    res.status(200).json(recettes);
  } catch (erreur) {
    res.status(500).json({ erreur: "Erreur lors de la récupération des recettes.", details: erreur });
  }
};

// Mettre à jour une recette
export const mettreAJourRecette = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, description, ingredients, etapes, image, temps_cuisson, minuteur, portions } = req.body;

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
    res.status(500).json({ erreur: "Erreur lors de la mise à jour de la recette.", details: erreur });
  }
};

// Supprimer une recette
export const supprimerRecette = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.recettes.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Recette supprimée avec succès." });
  } catch (erreur) {
    res.status(500).json({ erreur: "Erreur lors de la suppression de la recette.", details: erreur });
  }
};
