import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiJavascript,
    SiFlutter,
    SiMysql,
    SiNodedotjs,
    SiAnsys,
    SiArduino,
    SiPython,
    SiDart,
    SiPhp,
    SiCisco,
    SiHtml5,
    SiFirebase,
    SiWordpress,
    SiSolid,
    SiLaravel

} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portafolio",
        description:
            "Esto es un poco de mi portafolio y las herramientas que domino",
        technologies: [SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiMysql, SiCplusplus, SiAnsys, SiArduino, SiPython, SiFlutter, SiPhp, SiFirebase],
        techNames: ["JavaScript", "React", "Node.js", "Tailwind CSS", "Mysql", "C++", "Ansys", "Arduino", "Python", "Flutter", "Php", "Firebase"],
        techLinks: ["https://www.javascript.com", "https://reactjs.org/", "https://nodejs.org/es", "https://tailwindcss.com/", "https://www.mysql.com", "https://www.bloodshed.net", "https://www.ansys.com",
            "https://www.arduino.cc", "https://www.python.org", "https://flutter.dev", "https://www.php.net", "https://firebase.google.com/"],
        github: "https://github.com/ingdanielj0816",
        demo: ".",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Red de domótica",
        description:
            // ".",
            "En este proyecto se desarrollo la implementación de 5 servicios con dispositivos IOT,  para el envió  de estos a un dispositivo movil.",
        technologies: [SiCisco, SiHtml5, SiMysql, SiJavascript],
        techNames: ["Cisco", "HTML5", "Mysql", "JavaScript"],
        techLinks: ["https://www.cisco.com", "https://html5.org", "https://www.mysql.com", "https://www.javascript.com"],
        github: "https://github.com/ingdanielj0816",
        demo: ".",
        image: "/projects/Reddomotica.png",
        available: true,
    },
    {
        id: 2,
        name: "Vertclair",
        description:
            "Encargado del diseño, gestion y desarrollo de la pagina https://www.vc-sas.com",
        technologies: [SiWordpress, SiHtml5, SiMysql, SiJavascript],
        techNames: ["Wordpress", "HTML5", "Mysql", "JavaScript"],
        techLinks: ["https://www.cisco.com", "https://html5.org", "https://www.mysql.com", "https://www.javascript.com"],
        github: "https://github.com/ingdanielj0816",
        demo: ".",
        image: "/projects/10.png",
        available: true,
    },
    {
        id: 3,
        name: "Creación de Robots",
        description:
            "Se simulo y creo los siguientes mecanismos roboticos para tareas conjuntas:SCARA de 3 DOF, Antropomorfico de 4 DOF y Robot Movil",
        technologies: [SiArduino, SiCplusplus, SiSolid, SiJavascript],
        techNames: ["Arduino", "MATLAB", "SolidWorks", "JavaScript"],
        techLinks: ["https://www.arduino.cc", "https://la.mathworks.com", "https://www.solidworks.com/es", "https://www.javascript.com"],
        github: "https://github.com/ingdanielj0816",
        demo: ".",
        image: "/projects/23.png",
        available: true,
    },
    {
        id: 4,
        name: "Delivery GO",
        description:
            "Desarrollo de paneles de administración y pantallas de una aplicación de delivery.",
        technologies: [SiFlutter, SiLaravel, SiMysql, SiJavascript],
        techNames: ["Flutter", "Laravel", "Mysql", "JavaScript"],
        techLinks: ["https://flutter.dev", "https://laravel.com", "https://www.mysql.com", "https://www.javascript.com"],
        github: "https://github.com/ingdanielj0816",
        demo: ".",
        image: "/projects/11.png",
        available: true,
    },
];
