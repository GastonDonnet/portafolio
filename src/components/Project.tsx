import { Project as IProject } from '@/types'
import { useState } from 'react'
import Chip from './Chip'
const classNames = require('classnames')

interface Props {
    project: IProject,
    className?: string
}

export default function Project({ project }: Props) {

    const stateColors = {
        "Pausado": "bg-gray-500 hover:bg-gray-800 text-white",
        "En desarrollo": "bg-yellow-500 hover:bg-yellow-800 text-white",
        "Finalizado": "bg-green-500 hover:bg-green-800 text-white",
        "Abandonado": "bg-red-500 hover:bg-red-800 text-white"
    }

    const [showMore, setShowMore] = useState(false)
    const showMoreClasses = classNames("flex flex-col mt-2 pt-2 overflow-hidden transition-all duration-1000 ease-out max-h-0", {
        'max-h-80': showMore,
    })

    return (
        <div className="my-5 p-5 g-shadow-1 flex flex-col">
            <div className="flex flex-col md:flex-row text-center md:text-left">
                <div className="w-full">
                    <div className="text-xl font-semibold pb-3 border-b-2 border-gray-200">{project.title}</div>
                    <div className="my-2">{project.description}</div>


                    <div className="flex flex-row my-2  justify-center md:justify-start">
                        {project.technologies['backend'].map(tech => {
                            return (<Chip className="bg-blue-300 text-white hover:bg-blue-200" key={tech}><span>{tech}</span></Chip>)
                        })}
                    </div>
                    <div className="flex flex-row my-2  justify-center md:justify-start">
                        {project.technologies['frontend'].map(tech => {
                            return (<Chip className="bg-blue-400 text-white  hover:bg-blue-300" key={tech}><span>{tech}</span></Chip>)
                        })}
                    </div>
                    <div className="flex flex-row my-2  justify-center md:justify-start">
                        {project.technologies['devops'].map(tech => {
                            return (<Chip className="bg-blue-500 hover:bg-blue-400 text-white" key={tech}><span>{tech}</span></Chip>)
                        })}
                    </div>

                </div>
                {project.image ? <img className="h-40 ml-auto" src={require(`@/assets/${project.image}`).default} alt="" /> : ''}
            </div>
            <div className="flex flex-col md:flex-row mt-2 pt-2 border-t-2 border-gray-200">
                {project.github ? <a href={project.github} className="mx-5 my-1 md:my-0 self-center"><img src={require("@/assets/svg/github.svg").default} alt="" className="h-10" /> </a> : ''}
                <div className="md:h-10 flex flex-col md:flex-row items-center">
                    <Chip className={stateColors[project.state] + " my-1"}><span>{project.state}</span></Chip>
                    {project.demos.map((demo, i) => <a key={i} href={demo} className="my-1"><Chip className="bg-blue-600 text-white hover:text-blue-600 hover:bg-blue-100 transition-colors"><span>{demo}</span></Chip></a>)}
                </div>
            </div>

            <div className={showMoreClasses}>
                <div className="grid grid-cols-2">
                    {project.features.map((feature, i) => <div key={i} className="m-2 p-4 bg-gray-50 hover:bg-gray-100 shadow-md rounded-xl hover:shadow-sm transition-shadow duration-500 h">
                        <h1 className="font-medium text-blue-900">{feature.title}</h1>
                        <div className="font-light">{feature.description}</div>
                    </div>)}
                </div>
            </div>

            {
                project.features.length ? <div className="self-center">
                    <img onClick={() => { setShowMore(!showMore) }}
                        src={require("@/assets/svg/right-arrow.svg").default}
                        className={classNames("w-5 transform -mb-5  translate-y-2 cursor-pointer transition-transform duration-500", { "-rotate-90": showMore, "rotate-90": !showMore })}
                        style={{ 'filter': "drop-shadow(3px 0px 12px)" }} />
                </div> : null
            }
        </div>
    )
}