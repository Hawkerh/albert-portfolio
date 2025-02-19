import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dgfip from "../assets/dgfip.jpg";
import uqac from "../assets/uqac.jpg";

export default function Experiences() {
  const experiencesPro = [
    {
      title: "Développement web et IA - STAGE",
      company: "Université du Québec à Chicoutimi",
      logo: uqac,
      date: "Janvier 2025 - Juin 2025",
      description: "Développement d'une plateforme web pour la collecte, le traitement et l'analyse des données issues de casques EEG, et le développement d'une intelligence artificielle pour leur classification, dans le cadre d'une projet de recherche supervisée par Hamdi Ben Abdessalem.",
      tags: ["Next.js", "C#", "PostgreSQL", "Python","TypeScript" ],
    },
    {
      title: "Développement back-end -STAGE",
      company: "Direction générale des Finances publiques",
      logo: dgfip,
      date: "Avril 2024 - Août 2024",
      description: "Développement d'une plateforme web pour la gestion des employés et de leurs formations, Ce projet comprenait la conception d'API, la création d'interface utilisateur, l'optimisation de bases de données, ainsi que de la gestion de projet en méthode agile.",
      tags: ["Java Spring", "PostgreSQL", "Vue.js", "TypeScript"],
    },
  ];

  const projets = [
    {
      title: "Entraînement et évaluation d'un modèle Machine Learning",
      company: "Projet académique - UQAC",
      date: "2025",
      description:
        "Entraînement de modèles d'apprentissage supervisé avec Scikit-learn pour la prédiction des revenus clients d'un site e-commerce. Validation croisée, optimisation des hyperparamètres et mesure de performance",
      tags: ["Python"],
    },
    {
      title: "Création et optimisation d'une base de données Oracle",
      company: "Projet académique - UQAC",
      date: "2024",
      description:
        "Conception de diagrammes entité-association, normalisation de la base de données, création de tables, de vues, de procédures stockées et d'index, et optimisation des requêtes et évaluation de la performance des requêtes SQL. Mise en place d'index, de clusters et d'optimisations pour améliorer l'exécution des requêtes.",
      tags: ["SQL","UML","SQL Developer"],
    },
    {
      title: "Automatisation du déploiement sur Azure",
      company: "Projet académique - UQAC",
      date: "2024",
      description:
        "Mise en place d'une infrastructure cloud sur Azure incluant un Storage Account, des Azure Functions et un Service Bus Queue. Automatisation complète avec des pipelines CI/CD sur Azure DevOps.",
      tags: ["Azure DevOps","C#","CI/CD pipeline","GitHub" ],
    },
    {
      title: "Application de lecture de webtoons et mangas",
      company: "Projet personnel",
      date: "2024",
      description:
        "Développement d'une application mobile permettant de lire des webtoons et mangas en ligne, avec gestion de bibliothèque, de favoris et de téléchargements.",
      tags: ["Flutter", "Dart"],
    },
    {
      title: "Application de gestion de commandes",
      company: "Projet académique - BUT 2",
      date: "2023",
      description:
        "Développement d'une application pour la gestion des commandes et des livraisons d'une pizzeria. Interface web en PHP et gestion des commandes en Java avec une base de données MySQL.",
      tags: ["Java", "PHP", "MySQL", "UML"],
    },
    {
      title: "Application de gestion de projet similaire à Trello",
      company: "Projet académique - BUT 1",
      date: "2022",
      description:
        "Développement d'une application de gestion de projet avec Java, permettant la gestion de tâches, de tableaux et de collaboration en équipe.",
      tags: ["Java", "Swing", "MySQL"],
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 lg:px-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Expériences Professionnelles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {experiencesPro.map((exp, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardHeader className="flex flex-row  gap-4">
              <img src={exp.logo} alt=" Logo" className="w-16 h-16" />
              <div>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} - {exp.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 min-w-[395px]">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} className="bg-blue-500 text-white">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Projets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-4">
        {projets.map((proj, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle>{proj.title}</CardTitle>
              <CardDescription>{proj.company} - {proj.date}</CardDescription>
            </CardHeader>
            <CardContent className="h-[210px] flex flex-col ">
              <p className="text-gray-600">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag, idx) => (
                  <Badge key={idx} className="bg-green-500 text-white">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
