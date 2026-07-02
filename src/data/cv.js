// Données du CV - modifie ici, la page se met à jour automatiquement

export const profil = {
  nom: 'Nessia Bouchouit',
  titre: 'Apprentie développeuse web',
  accroche:
    "Diplômée d'un BTS Services Informatiques aux Organisations (option SLAM), je recherche une alternance dans le cadre d'un Bachelor CDA. Créative et motivée, j'aime concevoir des projets numériques concrets et continuer à progresser dans le développement web.",
  ville: 'Strasbourg, Grand Est',
  telephone: '07 67 93 22 23',
  email: 'nessia.bouchouit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nessia-bouchouit/',
  github: 'https://github.com/Mal3ul',
  cv: '/CV_2025.pdf',
  photo: '/5.jpg',
};

export const parcours = [
  {
    titre: 'Assistante projet & support',
    lieu: 'Blue Note Systems',
    periode: '2025 - aujourd\'hui',
    type: 'Alternance',
    description:
      "Alternance en tant qu'assistante projet et support, dans le cadre du Bachelor CDA.",
    points: [
      'Suivi et coordination de projets',
      'Support technique et accompagnement des utilisateurs',
    ],
  },
  {
    titre: 'Num & Boost',
    lieu: 'CCI Campus',
    periode: '2025',
    type: 'Formation',
    description:
      'Formation intensive en développement web proposée par plusieurs organismes de formation.',
    points: [
      "Conception d'une application web en PHP (Modèle-Vue-Contrôleur)",
      'Gestion de base de données',
      "Création d'interfaces utilisateur",
    ],
  },
  {
    titre: 'BTS SIO - option SLAM',
    lieu: 'IRIS, Strasbourg',
    periode: '2022 - 2024',
    type: 'Diplôme',
    description:
      'Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.',
    points: [
      'Langages de programmation (PHP, JavaScript, SQL, Java…)',
      "Développement d'applications web",
      'Gestion de projet et modélisation UML',
    ],
  },
  {
    titre: 'Sciendi',
    lieu: 'Cabinet de conseil & formation',
    periode: '2024',
    type: 'Stage',
    description:
      "Stage dans un cabinet spécialisé dans le développement web et l'amélioration de la performance opérationnelle des entreprises.",
    points: [
      'Réalisation d’un site e-commerce avec WordPress',
      "Découverte de l'hébergeur Ionos",
    ],
  },
  {
    titre: 'Pam Racing',
    lieu: 'Vente de pièces moto sportive',
    periode: '2023',
    type: 'Stage',
    description:
      'Entreprise disposant de plus de 10 000 articles haut de gamme en vente sur son site.',
    points: [
      'Utilisation de StoreCommander',
      'Gestion des déclinaisons produits',
      'Mise à jour des méta-descriptions',
    ],
  },
  {
    titre: 'Baccalauréat Général',
    lieu: 'Lycée Lavoisier, Mulhouse',
    periode: '2021',
    type: 'Diplôme',
    description:
      'Spécialités Sciences de l’Ingénieur (SI) et Numérique et Sciences Informatiques (NSI).',
    points: [
      "Initiation à l'algorithmique et à la programmation",
      'Travaux pratiques en électronique et conception de systèmes',
    ],
  },
];

export const competences = {
  Langages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'C#', 'Python', 'SQL'],
  'Frameworks & Libs': ['React', 'Node.js', 'Bootstrap'],
  'Développement': ['Web responsive', 'MVC'],
  'Bases de données': ['MySQL', 'PostgreSQL', 'MERISE', 'UML'],
  Outils: ['Figma', 'WordPress', 'PrestaShop', 'Git', 'Gestion de projet'],
};

export const realisations = [
  {
    nom: 'Déploiement Dashboard',
    description:
      "Mise en place d'un environnement de développement pour une application PHP/Symfony et configuration de l'accès distant sécurisé.",
    tags: ['Debian', 'Git', 'SSH'],
  },
  {
    nom: 'Portfolio Builder',
    description:
      "Application permettant de générer facilement un portfolio personnalisé.",
    tags: ['React', 'Node.js', 'Express', 'API REST', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    nom: 'Sciendi',
    description: "Site e-commerce développé avec WordPress et WooCommerce.",
    tags: ['WordPress', 'WooCommerce'],
  },
  {
    nom: 'Formatech',
    description: 'Site web full stack responsive pour un centre de formations.',
    tags: ['Full stack', 'PHP', 'Responsive'],
  },
  {
    nom: 'BricoBrac',
    description:
      "Site full stack d'e-commerce pour la vente d'outils de bricolage.",
    tags: ['Full stack', 'PHP', 'E-commerce'],
  },
  {
    nom: 'Pam Racing',
    description: 'Optimisation et personnalisation de pages produit avec PrestaShop.',
    tags: ['PrestaShop'],
  },
  {
    nom: 'Experty',
    description: "Modernisation et mise en place de l'infrastructure informatique.",
    tags: ['Infrastructure'],
  },
];

export const langues = [
  { nom: 'Français', niveau: 'Langue maternelle' },
  { nom: 'Anglais', niveau: 'Professionnel' },
];

export const qualites = ['Sérieuse', 'Motivée', 'Curieuse', 'Créative'];
