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
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-full h-96 py-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <Link
          to="/work"
          className="flex justify-between items-center px-4 pb-4"
        >
          <h1 className="text-white">Work</h1>
          <img
            className="bg-[#cfcaca6e] w-7 h-7 bg-opacity-10 backdrop-blur-3xl rounded-full p-2 cursor-pointer"
            src={arrowRight}
            alt="arrow"
          />
        </Link>
        <div className="h-72 flex justify-center items-center">
          <PreviewWrapper />
        </div>
      </div>
    </motion.div>
  )
}
export default WorkSlide
