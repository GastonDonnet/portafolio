import Chip from "@/components/Chip";
import { Technologies } from "@/types";
import React from "react";
import { Link } from "react-router-dom";

const technologies: Technologies = {
    backend: ["Javascript", "Typescript", "NodeJS", "Python", "Django", "Go"],
    frontend: ["Vue.js", "React.js"],
    devops: ["Docker", "Nginx", "MySQL", "PostgreSQL", "MongoDB"]
}

export default function Main() {
    return (<div>
        <div className="h-screen bg-cover bg-center" style={{
            backgroundImage: `url("${require("@/assets/images/pexels-math-331684.jpg").default}")`,
        }}>

            <div className="flex flex-col justify-center 
        p-4 w-full md:w-2/6 xl:w-1/4 h-full ml-auto mr-12 lg:mr-16 xl:mr-36
        font-semibold text-lg lg:text-2xl text-gray-800 bg-gray-50 bg-opacity-70 md:bg-transparent"
                style={
                    { backdropFilter: "blur(3px)" }
                }>
                <div className="text-3xl mb-2">Mi nombre es <span className="text-blue-900">Gastón</span></div>
                <p>Soy un <span className="text-blue-800">Fullstack Developer</span> y casi <span className="text-blue-800">Ingeniero Industrial</span>.</p>
                <p className="font-normal">Si buscas construir <span className="text-blue-700">aplicaciones web</span> para tu empresa</p>
                <Link to="/contact">
                    <button className="bg-gray-800 hover:bg-gray-300 text-gray-50 hover:text-gray-800 p-4 my-4 text-2xl w-full transition-colors ">
                        CONTACTAME
                    </button>
                </Link>
            </div>
        </div >
        <div className="py-8 lg:text-xl bg-gray-100">

            <div className="mx-auto container ">
                <div className="text-xl text-center lg:text-left lg:text-2xl font-medium">Tecnologias que utilizo</div>
                <div>
                    <div className="flex flex-row flex-wrap my-2 justify-center md:justify-start">
                        {technologies['backend'].map(tech => {
                            return (<Chip className="bg-green-300 text-white hover:bg-green-200 my-1" key={tech}><span>{tech}</span></Chip>)
                        })}
                        {technologies['frontend'].map(tech => {
                            return (<Chip className="bg-blue-400 text-white  hover:bg-blue-300 my-1" key={tech}><span>{tech}</span></Chip>)
                        })}
                        {technologies['devops'].map(tech => {
                            return (<Chip className="bg-indigo-500 hover:bg-indigo-400 text-white my-1" key={tech}><span>{tech}</span></Chip>)
                        })}
                    </div>

                </div>
            </div>

        </div>
    </div>)
}