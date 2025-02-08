import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import  dgfip from "../assets/dgfip.jpg";
import  uqac from "../assets/uqac.jpg";

export default function Experiences() {
  const experiencesPro = [
    {
      title: "Stage en développement back-end",
      company: "Entreprise X",
      logo : dgfip,
      date: "Été 2023",
      description: "Développement et optimisation d'API REST avec Node.js et Express.",
      tags: ["Node.js", "Express", "MongoDB", "Docker"],
    },
    {
      title: "Développeur Full-Stack",
      company: "Start-up Y",
        logo : uqac,
      date: "2022 - 2023",
      description: "Création d'une plateforme web pour la gestion de tâches en entreprise.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
  ];

  const projets = [
    {
      title: "Projet Open Source",
      company: "GitHub Community",
      date: "2022 - Présent",
      description: "Contributeur actif sur plusieurs projets open source liés au développement web.",
      tags: ["React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Développement d'une application mobile",
      company: "Projet personnel",
      date: "2021 - 2022",
      description: "Création d'une application mobile pour la gestion des tâches avec Flutter et Firebase.",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      title: "Site e-commerce",
      company: "Projet personnel",
      date: "2023",
      description: "Développement d'un site e-commerce avec paiement Stripe et intégration CMS.",
      tags: ["Next.js", "Stripe", "Sanity.io"],
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 lg:px-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Expériences Professionnelles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {experiencesPro.map((exp, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardHeader className="flex flex-row  gap-4">
                    <img src={exp.logo} alt="DGFIP Logo" className="w-16 h-16" />
                    <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company} - {exp.date}</CardDescription>
                    </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{exp.description}</p>
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
            <CardContent>
              <p className="text-gray-600">{proj.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
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
