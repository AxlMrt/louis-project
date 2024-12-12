import projectImage from "@/images/boat_top.jpg";
import boatImage from "@/images/DJI_0217.jpg";
import transatImage from "@/images/mini-transat.png";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaSailboat } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";

const projects = [
  {
    title: "Un projet d'aventure",
    photo: projectImage,
    content: {
      icon: BsBriefcaseFill,
      type: "Projet",
      engagement: "Un projet responsable",
      paragraphs: [
        "Chaque édition de la mini transat voit s'affronter des bateaux toujours plus perfectionnés, toujours plus cher. Retrouvons l'esprit originel de cette course à travers un projet différent.",
        "Je vous propose une mini transat plus responsable, sur un bateau qui a déjà couru à travers l'atlantique.",
      ],
    },
    alignRight: true,
  },
  {
    title: "Un mini 6.50 plus ancien",
    photo: boatImage,
    content: {
      icon: FaSailboat,
      type: "Mini 6.50",
      engagement: "Un engagement et des valeurs décuplés",
      paragraphs: [
        "Vainqueur de la Mini Transat 2001, le Pogo 1 n°237 est le mini idéal.",
        "Après 15 ans hors du circuit Mini, il est bientôt prêt à faire son grand retour moyennant une modernisation de son électronique et quelques soins. C'est un bateau fiable, encore rapide pour son âge et passionnant dans sa conception. Je vous propose une Mini Transat plus responsable, sur un bateau qui a déjà couru à travers l'Atlantique.",
      ],
    },
    alignRight: false,
  },
  {
    title: "La Mini Transat",
    videoUrl: "https://www.youtube.com/embed/9YkJ376mmIU",
    content: {
      icon: GoGoal,
      type: "Objectif",
      engagement: "Qu'est-ce que la Mini Transat ?",
      paragraphs: [
        "Une course transatlantique à la voile de légende par laquelle sont passés un grand nombres de marins du Vendée Globe !",
        "Une aventure hors norme : une traversée de l'atlantique en solitaire, sans assistance ni moyens de communication sur des voiliers de 6.50 !",
      ],
    },
    alignRight: true,
  },
];

export default projects;
