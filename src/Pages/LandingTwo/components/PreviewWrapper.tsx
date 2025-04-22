import PreviewCard from './PreviewCard'
import { casePreview } from '@/assets/casePreview'
import { frontendPreview } from '@/assets/frontendPreview'
import { Link } from 'react-router-dom'

const PreviewWrapper = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {casePreview.map((item, index) => (
        <Link key={index} to={`/work/design/${item.name}`}>
          <PreviewCard image={item.image} projectName={item.name}/>
        </Link>
      ))}
      {frontendPreview.map((item, index) => (
        <Link key={index} to={`/work/frontend/${item.name}`}>
          <PreviewCard image={item.image} projectName={item.name}/>
        </Link>
      ))}
    </div>
  )
}
export default PreviewWrapper
