import Typewriter from "../components/typewriter";
import cv from "../assets/cv.pdf";
import "@fortawesome/fontawesome-free/css/all.css";
import uqac from "../assets/uqac.jpg";
import parisSaclay from "../assets/iut.jpg";
import { Button } from "@/components/ui/button";
import { Download, MailQuestion } from 'lucide-react';
import { Badge } from "@/components/ui/badge"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



export default function Home() {
  return (
    <div className="mt-10 flex w-full flex-col xl:flex-row">
      {/* Section gauche - Présentation */}
      <div className="h-screen lg:w-full ml-10 flex flex-col justify-center gap-y-8">

        <h1 className="text-4xl font-bold w-fit text-gray-900">
          <Typewriter words={["Bonjour", "Hello", "Hola", "你好"]} />
          <span >, Je m'appelle Albert Cissé</span>
        </h1>
        <div className="bg-custom text-custom font-bold px-3 py-1 inline-block w-fit rounded">
          Étudiant en Informatique
        </div>

        <p className="text-gray-500 max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl">
          Étudiant en troisième année de baccalauréat en informatique à l'UQAC, avec une expertise en développement back-end et gestion de bases de données.
        </p>


        {/* Boutons d'action */}
        <div className=" w-fit">
          <Button className="mr-4" asChild ><a href="mailto:cissealbert.d@icloud.com"><MailQuestion />Me contacter</a></Button>
          <Button variant="outline" asChild><a href={cv} download rel="noopener noreferrer"><Download /> Télécharger CV</a></Button>
        </div>

        {/* Accordéons avec catégories */}
        <div className="mt-3 ">
          <Accordion type="single" collapsible>

            <AccordionItem value="scolarite">
              <AccordionTrigger>Scolarité</AccordionTrigger>
              <AccordionContent className="flex flex-col lg:flex-row gap-2">
              {/* UQAC */}
              <Card className="shadow-lg rounded-lg">
                <CardHeader className="flex flex-row gap-4">
                <img src={uqac} alt="UQAC Logo" className="w-16 h-16" />
                <div>
                  <CardTitle>Université du Québec à Chicoutimi</CardTitle>
                  <CardDescription>2022 - 2025</CardDescription>
                </div>
                </CardHeader>
                <CardContent>
                <p className="font-semibold">Diplôme : Baccalauréat en informatique</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  <li>Environnement de déploiement des applications (Azure DevOps)</li>
                  <li>Gestion production dans l'industrie du numérique</li>
                  <li>Bases de données avancées</li>
                  <li>Conception et programmation de sites Web</li>
                  <li>Apprentissage machine pour la science des données</li>
                  <li>Informatique mobile</li>
                  <li>Technologies Web avancées</li>
                  <li>Algorithmique</li>
                </ul>
                </CardContent>
              </Card>

              {/* Université Paris-Saclay */}
              <Card className="shadow-lg rounded-lg">
                <CardHeader className="flex flex-row gap-4">
                <img src={parisSaclay} alt="Paris-Saclay Logo" className="w-16 h-16" />
                <div>
                  <CardTitle>Université Paris-Saclay - IUT d'Orsay</CardTitle>
                  <CardDescription>2020 - 2022</CardDescription>
                </div>
                </CardHeader>
                <CardContent>
                <p className="font-semibold">Diplôme : Bachelor Universitaire de Technologie en informatique</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  <li>Programmation orientée objet</li>
                  <li>Développement web (HTML, CSS, JS, PHP)</li>
                  <li>Utilisation de GitLab pour CI/CD</li>
                  <li>Gestion de projet (méthodologies Agile/Scrum)</li>
                  <li>Création et administration de bases de données (Oracle, MySQL)</li>
                  <li>Administration système et réseaux (Linux, virtualisation, TCP/IP)</li>
                </ul>
                </CardContent>
              </Card>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="passion">
              <AccordionTrigger>Passions</AccordionTrigger>
              <AccordionContent className="flex flex-wrap gap-2">
                <Badge className="bg-red-500 text-white">La photographie</Badge>
                <Badge className="bg-orange-500 text-white">Le cinéma</Badge>
                <Badge className="bg-purple-500 text-white">La guitare</Badge>
                <Badge className="bg-indigo-500 text-white">Le basketball</Badge>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>


      {/* Section droite - Aperçu du CV */}
      <div className="h-screen w-full flex justify-center items-center">
        <iframe src={cv} className="w-4/5 h-4/5 border rounded-lg shadow-md"></iframe>
      </div>

    </div>
  );
}
