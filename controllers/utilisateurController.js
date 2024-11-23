import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const CLE_SECRETE_JWT = "wtz2";

// Inscription d'un utilisateur
export const inscrireUtilisateur = async (req, res) => {
  try {
    const { nom, email, mot_de_passe } = req.body;
    const motDePasseHashe = await bcrypt.hash(mot_de_passe, 10);

    const utilisateur = await prisma.utilisateurs.create({
      data: {
        nom,
        email,
        mot_de_passe: motDePasseHashe,
      },
    });

    res.status(201).json({ message: "Utilisateur créé avec succès.", utilisateur });
  } catch (erreur) {
    res.status(500).json({ erreur: "Erreur lors de l'inscription.", details: erreur });
  }
};

// Connexion d'un utilisateur
export const connecterUtilisateur = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;

    const utilisateur = await prisma.utilisateurs.findUnique({
      where: { email },
    });

    if (!utilisateur) {
      return res.status(404).json({ erreur: "Utilisateur non trouvé." });
    }

    const motDePasseValide = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);
    if (!motDePasseValide) {
      return res.status(401).json({ erreur: "Mot de passe incorrect." });
    }

    const token = jwt.sign({ id: utilisateur.id, email: utilisateur.email }, CLE_SECRETE_JWT, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Connexion réussie.", token });
  } catch (erreur) {
    res.status(500).json({ erreur: "Erreur lors de la connexion.", details: erreur });
  }
};

// Obtenir tous les utilisateurs
export const obtenirTousLesUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await prisma.utilisateurs.findMany();
    res.status(200).json(utilisateurs);
  } catch (erreur) {
    res.status(500).json({ erreur: "Erreur lors de la récupération des utilisateurs.", details: erreur });
  }
};

// Supprimer un utilisateur
export const supprimerUtilisateur = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.utilisateurs.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Utilisateur supprimé avec succès." });
  } catch (erreur) {
    res.status(500).json({ erreur: "Erreur lors de la suppression de l'utilisateur.", details: erreur });
  }
};
