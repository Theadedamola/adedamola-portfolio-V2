import { useParams } from 'react-router-dom'
import { caseStudy } from '@/assets/casestudy'
import DesignDetails from './DesignDetails'

const DesignWrapper = () => {
  const { name } = useParams<{ name: string }>()
  const caseStudyDetails = caseStudy.find((item) => item.name === name)
  
  if (!caseStudyDetails) {
    return <div>Case study not found</div>
  }

  return <DesignDetails {...caseStudyDetails} />
}
export default DesignWrapper
