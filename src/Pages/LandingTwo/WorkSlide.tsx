import arrowRight from '@/assets/vuesax/linear/arrow-right.svg'
import PreviewWrapper from './components/PreviewWrapper'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const WorkSlide = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-full h-96 py-4">
        <Link to="/work" className="flex justify-between items-center pb-4">
          <h1 className="text-2xl">Projects</h1>
          <div className="bg-[#4747476e] rounded-full p-2 flex items-center cursor-pointer">
            <p>View All</p>
            <img src={arrowRight} alt="arrow" />
          </div>
        </Link>
        <div className="h-72 flex justify-center items-center">
          <PreviewWrapper />
        </div>
      </div>
    </motion.div>
  )
}
export default WorkSlide
