// Projects
export enum ProjectState {
    Paused = 'Pausado',
    Wip = 'En desarrollo',
    Finished = 'Finalizado',
    Abandoned = 'Abandonado'
}

export interface Technologies {
    frontend: string[],
    backend: string[],
    devops: string[]
}

export interface Feature {
    title: string,
    description: string
}

export interface Project {
    title: string,
    description: string,
    state: ProjectState,
    github?: string,
    demos: string[],
    technologies: Technologies,
    features: Feature[],
    image: string
}

// Studies

export interface Study {
    title: string,
    duration: string,
    university: string,
    mean?: number,
    misc?: StudyMisc[]
}

interface StudyMisc {
    title: string,
    description: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
}

export interface Work {
    title: string,
    employee: string,
    duration: string,
    place: string,
    tasks: string[]
}
