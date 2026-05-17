// Contenu du CV centralisé — modifiez ici pour mettre à jour le portfolio

export const profile = {
  firstName: 'Jean-François',
  lastName: 'Uccelli',
  title: 'Administrateur Applicatif Confirmé',
  tagline: 'Salesforce · Sitetracker · HubSpot · LWC · Apex · Conduite du changement',
  yearsOfExperience: 'Près de 5 ans d\'expérience',
  summary:
    'Près de 5 ans d\'expérience en administration Salesforce, Sitetracker et HubSpot pour ≈120 utilisateurs en environnement photovoltaïque. Profil hybride admin + dev : paramétrage fonctionnel, développement LWC et Apex, certifié Sitetracker Administrator. Référent applicatif transverse couvrant CRM, outils collaboratifs et formation des utilisateurs.',
}

export const contact = {
  phone: '06 61 46 67 77',
  email: 'jeanfrancoisuccelli@gmail.com',
  linkedin: 'linkedin.com/in/jeff-uccelli',
  linkedinUrl: 'https://www.linkedin.com/in/jeff-uccelli',
  github: 'github.com/JeanFrancoisUccelli',
  githubUrl: 'https://github.com/JeanFrancoisUccelli',
  cvOnline: 'jeff-uccelli-cv-online.netlify.app',
  cvOnlineUrl: 'https://jeff-uccelli-cv-online.netlify.app',
  location: 'La Fare-les-Oliviers (13)',
  mobility: 'Mobile / Bouches-du-Rhône — Ouvert au remote',
}

export type Experience = {
  company: string
  location: string
  role: string
  period: string
  highlights: string[]
  stack?: string
}

export const itExperiences: Experience[] = [
  {
    company: 'Enoé Énergie',
    location: 'Marseille',
    role: 'Administrateur Salesforce & HubSpot · Référent applicatif',
    period: 'Oct. 2021 — présent',
    highlights: [
      'Administration de l\'org Salesforce Production pour ≈120 utilisateurs (l\'ensemble des collaborateurs) : objets custom, champs, profils, permission sets, flows, rapports & dashboards.',
      'Conception et développement d\'une dizaine de Lightning Web Components et autant de triggers Apex pour automatiser des processus métier critiques.',
      'Réalisation marquante : LWC d\'intégration ArcGIS offrant aux chargés de projet une vue cartographique en temps réel de l\'avancement des chantiers photovoltaïques, embarquée directement dans Salesforce.',
      'Administration du vertical Sitetracker (gestion de projets photovoltaïques / EnR) déployé sur l\'org Salesforce : modélisation des workflows, KPI de suivi, intégration aux processus terrain — Certifié Sitetracker Administrator.',
      'Administration HubSpot : gestion des utilisateurs, paramétrage CRM, pipelines commerciaux, propriétés custom, intégrations.',
      'Pilotage de l\'écosystème outils transverses (Wrike, Moffi, Dropbox, Google Workspace, Microsoft 365) — déploiement et conduite du changement sur l\'ensemble des 120 collaborateurs.',
      'Formation initiale et continue des équipes aux applications métier : conception des supports, animation, suivi de la montée en compétences.',
      'Conception et maintenance de l\'intranet d\'entreprise.',
    ],
  },
  {
    company: 'Telaqua',
    location: 'Marseille',
    role: 'Développeur web (formation Wild Code School appliquée)',
    period: 'Sept. 2020 — Mars 2021',
    highlights: [
      'Conception et réalisation du site vitrine telaqua.com : maquettage, choix techniques, squelette, composants, pages.',
    ],
    stack:
      'HTML · CSS · React · TypeScript · Styled-Components · Gatsby · Next.js · Nest.js · GraphQL · MySQL · i18n',
  },
]

export const previousExperiences: Experience[] = [
  {
    company: 'Orthoconcept',
    location: 'Aix-en-Provence',
    role: 'Prothésiste dentaire spécialisé en conception numérique',
    period: '2008 — 2020 (12 ans)',
    highlights: [
      'Numérisation 3D d\'empreintes, traitement de fichiers OBJ / STL et conception de set-up dentaires sur suite logicielle 3Shape — précision micrométrique, rigueur de production numérique.',
    ],
  },
  {
    company: 'Avant 2008',
    location: 'Région PACA',
    role: 'Gérant d\'auto-école — entrepreneuriat, formation, relation client',
    period: '1996 — 2007',
    highlights: [
      'Gérance d\'auto-école et gestion logistique en région PACA — entrepreneuriat, formation, relation client.',
    ],
  },
]

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Salesforce',
    items: [
      'Administration org (objets, champs, profils, permission sets, flows, rapports & dashboards)',
      'Développement LWC & Apex',
      'SOQL',
      'Sitetracker Administrator',
    ],
  },
  {
    title: 'CRM & SaaS',
    items: [
      'HubSpot (admin, pipelines, propriétés custom)',
      'Wrike',
      'Moffi',
      'Dropbox',
      'Google Workspace',
      'Microsoft 365',
    ],
  },
  {
    title: 'Web & data',
    items: [
      'HTML / CSS / JavaScript / TypeScript',
      'React',
      'Node.js',
      'GraphQL',
      'MySQL',
      'ArcGIS',
    ],
  },
  {
    title: 'Méthodes',
    items: [
      'Agile',
      'Conduite du changement',
      'Formation utilisateurs',
      'Documentation fonctionnelle',
    ],
  },
]

export const softSkills = ['Pédagogie', 'Autonomie', 'Polyvalence']

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Technique & professionnel' },
]

export const certifications = [
  { name: 'Sitetracker Administrator', date: 'Mai 2023' },
]

export type Education = {
  diploma: string
  institution: string
  detail?: string
}

export const educations: Education[] = [
  {
    diploma: 'Développeur Web et Mobile',
    institution: 'Wild Code School — Marseille',
    detail: 'Formation diplômante, 5 mois',
  },
  {
    diploma: 'Enseignant de la conduite et de la sécurité routière',
    institution: 'Ecotrans — Rognac',
    detail: 'Diplôme d\'État de moniteur Auto-école',
  },
  {
    diploma: 'DEUG Sciences',
    institution: 'Faculté Saint-Jérôme — Marseille',
  },
]
