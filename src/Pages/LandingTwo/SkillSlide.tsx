import { skillIcon } from '@/assets/skillData'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
const SkillSlide = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5}}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-full h-72 bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <div className="flex justify-between items-center px-4 py-4 pb-16">
          <h1 className="text-2xl">Stack</h1>
        </div>
        <Marquee gradient={false} pauseOnHover speed={50} className="h-32">
          {skillIcon.map((skill) => (
            <img
              key={skill.id}
              src={skill.image}
              alt={`Skill ${skill.id}`}
              className="h-24 mx-4 hover:scale-105 transition-all duration-300"
            />
          ))}
        </Marquee>
      </div>
    </motion.div>
  )
}
export default SkillSlide
