import PreviewCard from './PreviewCard'
import { casePreview } from '@/assets/casePreview'
import { frontendPreview } from '@/assets/frontendPreview'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const PreviewWrapper = () => {
  return (
    <Marquee gradient={false} pauseOnHover speed={50} className="flex h-full">
      {casePreview.map((item, index) => (
        <Link to={`/work/design/${item.name}`}>
          <PreviewCard key={index} image={item.image} />
        </Link>
      ))}
      {frontendPreview.map((item, index) => (
        <Link to={`/work/frontend/${item.name}`}>
          <PreviewCard key={index} image={item.image} />
        </Link>
      ))}
    </Marquee>
  )
}
export default PreviewWrapper
