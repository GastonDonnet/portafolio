import { Study, Work } from "@/types"

export default function About() {

    const STUDIES: Study[] = [
        {
            title: "Ingenieria Industrial",
            duration: "01/2015 - 09/2020",
            university: "Facultad de Ingenieria Quimica (Universidad Nacional del Litoral)",
            mean: 8.0,
            misc: [
                {
                    title: "Proyecto Final: ",
                    description: <>
                        Balanceo de lineas de ensamble <a className="text-blue-500 font-light" href="https://github.com/GastonDonnet/assembly-line-balancing">(Github con algoritmos desarrollados)</a>
                    </>
                }
            ]
        },
    ]

    const WORKS: Work[] = [
    {
        title: "Fullstack Developer",
        employee: "Lima Innovation Lab",
        duration: "03/2021 - 09/2021",
        place: "Perú (remoto)",
        tasks: [
            "Estaba encargado de mantener el ambiente productivo, desarrollando tareas y corrigiendo errores que surgian todas las semanas a pedido del cliente y estaban fuera de proyecto",
            "Backend con Python + Django + PSQL",
            "Frontend con Angular",
            "Corregir y tomar entrevistas técnicas para puestos Backend",
            "Contacto estrecho con el cliente para solución de problemas"
        ]
    },
    {
        title: "Ayudante Alumno en Administración de operaciones",
        employee: "Facultad de Ingeniería Química U.N.L.",
        duration: "08/2019 - 12/2020",
        place: "Santa Fe",
        tasks: [
            "Confeccione trabajos practicos de problemas reales junto a empresas industriales, participe en su correccion y coordine visitas.",
            "Asistí a las clases practicas ayudando a alumnos a solucionar las dudas que posean sobre la programación en lenguaje de modelado de optimización matemática GAMS."
        ]
    },
    {
        title: "Desarrollador Fullstack",
        employee: "Rapisuper.com.ar",
        duration: "01/2020 - 06/2020",
        place: "San Carlos Centro",
        tasks: [
            "Cree un API Rest con Node.js.",
            "Hice modificaciones y arreglos del Frontend usando Vue.js.",
            "Implemente componente para lector de barras por cámara de celular y lector físico."
        ]
    },
    {
        title: "Diseño de procesos de un Pañol y sistema de soporte",
        employee: "Dubner Constructora",
        duration: "07/2019 - 09/2019",
        place: "Santa Fe",
        tasks: [
            "Diseñe el proceso de funcionamiento de un Pañol/Depósito y su interacción con obras.",
            "Diseñe e implemente un sistema informático de soporte a dichas actividades, usando Python + Django.",
            "El mismo poseía CRUD de ítems, personal, edificios, etc. Permitía un seguimiento a nivel de ítem individual de las obras a las que fue y en que ubicacion y estado están."
        ]
    }]

    return (<div className="my-5 mx-auto container">
        <div className="my-5 p-5 g-shadow-1 flex flex-col">
            <h1 className="text-2xl text-blue-800 border-b-2 border-blue-400">Estudios</h1>
            {
                STUDIES.map((study, i) => {

                    return (<div className="my-4 mx-4" key={i}>
                        <h2 className="text-xl text-blue-600">{study.title} <span className="text-base">({study.duration})</span></h2>
                        <h3>{study.university}</h3>

                        {
                            study.mean ?
                                <div>
                                    <span>Promedio: </span>
                                    <span className="text-gray-600 font-light">{study.mean}</span>
                                </div>
                                : null
                        }
                        {
                            study.misc ?
                                study.misc.map(misc => (
                                    <div>
                                        <span>{misc.title}</span>
                                        <span className="text-gray-600 font-light">
                                            {misc.description}
                                        </span>

                                    </div>
                                ))
                                : null
                        }
                    </div>)
                })
            }
        </div>
        <div className="my-5 p-5 g-shadow-1 flex flex-col">
            <h1 className="text-2xl text-blue-800 border-b-2 border-blue-400">Experiencia</h1>
            {
                WORKS.map((work, i) => {

                    return (<div className="my-4 mx-4" key={i}>
                        <h2 className="text-xl text-blue-600">{work.title} <span className="text-base">({work.duration})</span></h2>
                        <h3>{work.employee} - <span className="text-gray-500">{work.place}</span></h3>
                        {
                            work.tasks ?
                                work.tasks.map(task => (
                                    <div className="my-2">
                                        <span className="text-gray-600 font-light">
                                            {task}
                                        </span>
                                    </div>
                                ))
                                : null
                        }
                    </div>)
                })
            }
        </div>
        <div className="my-5 p-5 g-shadow-1 flex flex-col">
            <h1 className="text-2xl text-blue-800 border-b-2 border-blue-400">Hobbies</h1>

            <div className="my-4 mx-4 flex flex-row flex-wrap justify-center">
                <div className="my-8 px-8 flex flex-col items-center md:w-1/2 lg:w-1/3">
                    <img className="w-32" src={require("@/assets/svg/hobbies/synthesizer.svg").default} alt="" />
                    <h2 className="mb-1 mt-3 text-xl text-blue-600">Música</h2>
                    <div>
                        <p>Toco el teclado y la guitarra, compongo, estuve y estoy en algunas bandas.</p>
                        <p>Descubrí la música en 2015 y todo lo que aprendí fue de forma autodidacta.</p>
                    </div>
                </div>
                <div className="my-8 px-8 flex flex-col items-center md:w-1/2 lg:w-1/3">
                    <img className="w-32" src={require("@/assets/svg/hobbies/books.svg").default} alt="" />
                    <h2 className="mb-1 mt-3 text-xl text-blue-600">Lectura</h2>
                    <div>
                        <p>Me gusta mucho leer ficción y fantasía, al momento de escribir esto llevo mas de <a className="text-blue-500 font-light" href="https://www.goodreads.com/user/show/84785359-gaston-donnet">75 libros leidos</a>.</p>
                    </div>
                </div>
                <div className="my-8 px-8 flex flex-col items-center md:w-1/2 lg:w-1/3">
                    <img className="w-32" src={require("@/assets/svg/hobbies/desktop.svg").default} alt="" />
                    <h2 className="mb-1 mt-3 text-xl text-blue-600">Programación</h2>
                    <div>
                        <p>Hobby que comenzó desde los 12/13 años mientras jugaba un juego en el que aprendí a programar paginas html/css básicas.</p>
                        <p>Cuando cursaba la carrera de Ingeniería Industrial, tuve varias materias que hicieron que me guste mucho y elija dedicarme a esto.</p>
                    </div>
                </div>


            </div>

        </div>
    </div>)
}