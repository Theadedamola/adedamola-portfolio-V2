import { useParams } from "react-router-dom"
import FrontendDetails from "./FrontendDetails"
import { frontendData } from "@/assets/frontendData"

const FrontendWrapper = () => {
  const { name } = useParams<{ name: string }>()
  const caseStudyDetails = frontendData.find((item) => item.name === name)

  if (!caseStudyDetails) {
    return <div>Case study not found</div>
  }

  return <FrontendDetails {...caseStudyDetails} />
}
export default FrontendWrapper