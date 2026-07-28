Auteur :
Diallo Cheikh Mouhamadou Mourtalla
Projet réalisé dans le cadre d'un examen de web design — Licence 1 Informatique appliquée à la gestion des entreprises (IAGE)
Email: diallomourtalla30@gmail.com

AfriConnect Summit 2026

Site vitrine  du sommet panafricain de la tech, du business et de l'innovation — Dakar, Sénégal.

🔗 **Site en ligne :** [https://diallomourtalla30-lab.github.io/diallo-cheikh-mouhamadou-mourtalla-AfriConnect-Summit/](https://github.com/diallomourtalla30-lab/diallo-cheikh-mouhamadou-mourtalla-AfriConnect-Summit)


##  À propos

AfriConnect Summit est un projet web réalisé dans le cadre d'un examen de première année, consistant à concevoir un site multi-pages complet pour une conférence tech fictive. Le projet met l'accent sur un HTML sémantique, un système de design cohérent en CSS pur, et des interactions entièrement gérées en JavaScript natif, sans framework ni librairie externe.

## Fonctionnalités

-  **Mode sombre / clair** persistant entre les pages (`localStorage`)
-  **Compte à rebours en temps réel** jusqu'à l'événement
-  **Compteurs animés** au scroll (participants, intervenants, pays)
-  **Programme interactif** en onglets (3 jours, sans rechargement de page)
-  **Filtrage dynamique des intervenants** par thématique
- **Formulaire d'inscription** avec validation JavaScript (regex email, retour visuel par champ)
-  **FAQ en accordéon** géré uniquement en CSS pur
-  **Carte Google Maps** intégrée pour la localisation de l'événement
-  **Menu hamburger** et navbar dynamique au scroll, entièrement responsive
-  **Bouton retour en haut** avec défilement fluide

##  Pages du site

| Page | Fichier | Description |

| Accueil | `index.html` | Hero, compte à rebours, chiffres clés, sponsors |
| Programme | `programme.html` | Planning des 3 jours en onglets, thématiques |
| Intervenants | `intervenants.html` | Grille filtrable des intervenants |
| Contact | `contact.html` | Formulaire d'inscription, FAQ, carte |

##  Stack technique

- **HTML5** sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — variables natives (`:root`), Flexbox, Grid, media queries responsive (mobile / tablette / desktop)
- **JavaScript vanilla** — aucune dépendance, aucun framework
- **Google Fonts** — Poppins
- **Bootstrap Icons** — pictogrammes vectoriels

##  Structure du projet
.
├── index.html
├── programme.html
├── intervenants.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero-home.jpeg
│   ├── hero-programme.jpeg
│   ├── hero-intervenant.jpeg
│   └── speaker1.jpeg … speaker9.jpeg
└── README.md