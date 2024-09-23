export interface ProcessTypes {
    heading: string;
    content: string;
}
export interface SolutionTypes {
  heading: string
  content: string
  image?: string
}

export interface CaseStudyTypes {
    id: number;
    thumbnail: string;
    name: string;
    subtext: string;
    process: ProcessTypes[];
    solution: SolutionTypes[];
}

export interface CardTypes {
  thumbnail: string
  name: string
  onNextProject: () => void
  onPreviousProject: () => void
}

export interface PreviewCardTypes {
  image: string
  name: string
}