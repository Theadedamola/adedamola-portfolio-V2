export interface ProcessTypes {
  heading: string
  content: string
}
export interface SolutionTypes {
  heading: string
  content: string
  image?: string
}

export interface FrontendTypes {
  id: number
  thumbnail: string
  name: string
  subtext: string
  website: string
  github?: string
  process: ProcessTypes[]
  solution: SolutionTypes[]
}
