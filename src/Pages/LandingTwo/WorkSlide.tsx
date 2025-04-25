import arrowRight from '@/assets/vuesax/linear/arrow-right.svg'
import PreviewWrapper from './components/PreviewWrapper'
import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

const WorkSlide = () => {
  return (
    <div>
      <div className="w-full py-4">
        <Link to="/work" className="flex justify-between items-center pb-4">
          <h1 className="text-4xl font-reyka">Featured Projects</h1>
          <div className="bg-[#4747476e] rounded-full p-2 flex items-center cursor-pointer">
            <p>View All</p>
            <img src={arrowRight} alt="arrow" />
          </div>
        </Link>
        <div className="w-full">
          <PreviewWrapper />
        </div>
      </div>
    </div>
  )
}
export default WorkSlide
