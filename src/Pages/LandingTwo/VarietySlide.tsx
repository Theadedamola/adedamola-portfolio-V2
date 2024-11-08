import { motion } from 'framer-motion'
import ExperienceCard from './components/ExperienceCard'
import { ExperienceData } from './components/ExperienceData'

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
      <div className="w-full p-6 bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <div className="flex justify-between items-center pb-10">
          <h1 className="text-2xl">Experience</h1>
        </div>
        {ExperienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            position={experience.position}
            duration={experience.duration}
            summary={experience.summary}
            skill={experience.skill}
          />
        ))}
      </div>
    </motion.div>
  )
}
export default VarietySlide
