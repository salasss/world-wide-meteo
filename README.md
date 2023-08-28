# Projet World Wide Météo - Application de Prévisions Météo en Temps Réel

L'application **World Wide Météo** est une plateforme interactive qui fournit des prévisions météorologiques en temps réel pour des villes du monde entier. Conçue à l'aide de la bibliothèque JavaScript React, cette application permet aux utilisateurs d'obtenir des informations détaillées sur la météo actuelle et les prévisions à venir, tout en offrant une expérience utilisateur conviviale.

## Caractéristiques Principales

- **Recherche de Ville par Coordonnées Géographiques :** L'application propose une barre de recherche intuitive où les utilisateurs peuvent entrer les coordonnées géographiques (latitude et longitude) d'une ville spécifique pour obtenir des informations météorologiques précises.

- **Affichage des Conditions Météo Actuelles :** Grâce au composant dédié à l'affichage des conditions météorologiques actuelles, les utilisateurs peuvent consulter des informations cruciales telles que la température, la description des conditions météo, la ressenti, la vitesse du vent, l'humidité et la pression atmosphérique.

- **Prévisions à Court Terme :** L'application fournit également des prévisions météorologiques pour les prochains jours, permettant aux utilisateurs de planifier en conséquence en fonction des conditions à venir.

- **Navigation et Pied de Page :** La barre de navigation en haut de la page permet aux utilisateurs de revenir à l'accueil ou de contacter l'équipe via un lien e-mail. Le pied de page affiche un message de droits d'auteur avec l'année actuelle.

## Technologies Utilisées

- **React :** Utilisé comme principal framework pour la construction de l'interface utilisateur dynamique et réactive de l'application.
- **Fetch API :** Employée pour effectuer des requêtes HTTP vers les API de géolocalisation et de prévisions météorologiques.
- **HTML et CSS :** Utilisés pour la structure et le style de l'application, garantissant une présentation attrayante et conviviale.
- **RapidAPI :** La géolocalisation est rendue possible en utilisant le service RapidAPI pour interagir avec la base de données géographique.
- **OpenWeather API :** Les données météorologiques en temps réel et les prévisions sont fournies par l'API OpenWeather.

## Comment Utiliser

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir configuré les clés d'API RapidAPI et OpenWeather dans les fichiers appropriés (`Api.js`).
3. Installez les dépendances en exécutant `npm install`.
4. Lancez l'application avec `npm start`.

**Note :** Veillez à respecter les bonnes pratiques de gestion des clés d'API en gardant les informations sensibles confidentielles.

Explorez le monde des prévisions météorologiques en temps réel avec l'application World Wide Météo et restez informé des conditions météo dans diverses régions du globe.
