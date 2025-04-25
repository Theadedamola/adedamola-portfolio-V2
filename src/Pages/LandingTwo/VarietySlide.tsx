import { motion } from 'framer-motion'
import ExperienceCard from './components/ExperienceCard'
import { ExperienceData } from './components/ExperienceData'
import Button from '@/Components/Button'
import { Link } from 'react-router-dom'

const VarietySlide = () => {
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
      <div className="flex justify-between items-center pb-8">
        <h1 className="text-4xl font-reyka">Experience</h1>
      </div>
      <div className="w-full p-6 bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        {ExperienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            position={experience.position}
            duration={experience.duration}
            summary={experience.summary}
            skill={experience.skill}
          />
        ))}
        <Link to="https://drive.google.com/file/d/1Fg20XKv6_n8dLE99HLVMx5Uk7X6uRzjd/view?usp=sharing">
          <Button variant="secondary" className="w-fit">
            Download Resumé
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
export default VarietySlide
