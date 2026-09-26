# Imagin-AI — Frontend

Imagin-AI est une plateforme web intégrant plusieurs fonctionnalités basées sur l'intelligence artificielle et le traitement d'images.

## Fonctionnalités

### ARTIFY
Transformation de selfies et d'images en œuvres artistiques grâce à un modèle de Deep Learning.

### INSIGHT
Analyse des émotions faciales à partir d'une image ou d'un flux vidéo.

### STYLE ME
Analyse d'une tenue vestimentaire avec :
- détection des catégories de vêtements ;
- identification des couleurs dominantes ;
- analyse de la tenue.

## Technologies utilisées

- Angular
- TypeScript
- HTML5
- CSS3
- REST API
- Python / Flask pour le backend
- Deep Learning
- Computer Vision

## Structure du projet

```text
imagin-ai-frontend-main/
│
├── public/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── hub/
│   │   │   ├── insight/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── styleme/
│   │   │   └── transform/
│   │   │
│   │   └── services/
│   │
│   ├── assets/
│   ├── styles.css
│   └── main.ts
│
├── angular.json
├── package.json
├── package-lock.json
├── proxy.conf.json
└── tsconfig.json
