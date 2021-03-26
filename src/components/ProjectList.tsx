import { Project as IProject, ProjectState } from "../types"
import Project from "./Project";

export default function ProjectList() {

    const PROJECTS: IProject[] = [
        {
            title: 'LoConnected',
            description: 'Web en la que podes crear y gestionar tu eCommerce.',
            state: ProjectState.Paused,
            github: 'https://github.com/GastonDonnet/lo-connected',
            demos: ['https://www.loconnected.tk', 'https://admin.loconnected.tk'],
            technologies: {
                frontend: ["Vue", "Vuetify"],
                backend: ["NodeJs", "Express"],
                devops: ["Docker", "Nginx"],
            },
            features: [
                {
                    title: "Panel Administrador",
                    description: "Posee un panel administrador desde el cual podes crear o gestionar tu tienda, productos, empleados, etc."
                },
                {
                    title: "eCommerce",
                    description: "Las tiendas son mostradas al publico general, el cual puede comprar un producto al ingresar a su cuenta."
                }
            ],
            image: "projects/LoConnected.png"

        },
        {
            title: 'dbArte',
            description: 'Web de ventas de cuadros.',
            state: ProjectState.Finished,
            github: 'https://github.com/GastonDonnet/dbarte',
            demos: ['https://www.dbarte.com.ar'],
            technologies: {
                frontend: ["Vue", "Tailwindcss"],
                backend: ["Python", "Django"],
                devops: ["Docker", "Nginx"]
            },
            features: [
                {
                    title: "Panel Administrador",
                    description: "Utiliza el panel de control personalizado de Django."
                },
                {
                    title: "Procesador de imagenes",
                    description: "Al subir una imagen, la procesa para reducir su tamaño y le agrega una marca de agua."
                }
            ],
            image: "projects/dbArte.png"
        },
        {
            title: 'Suviba S.A.',
            description: 'Web estatica para empresa contructora.',
            state: ProjectState.Finished,
            demos: ['https://www.suviba.com.ar'],
            technologies: {
                frontend: ["Vue", "Tailwindcss"],
                backend: [],
                devops: ["cPanel"]
            },
            features: [],
            image: "projects/Suviba.png"
        },
        {
            title: 'Portafolio',
            description: 'Lo que estas viendo ahora!',
            state: ProjectState.Finished,
            demos: ['#'],
            technologies: {
                frontend: ["React", "Typescript"],
                backend: [],
                devops: []
            },
            features: [],
            image: ""
        },
    ];

    return (
        <div className="flex flex-col">

            {PROJECTS.map(project => (
                <Project key={project.title} project={project}></Project>
            ))}

        </div>
    )
}