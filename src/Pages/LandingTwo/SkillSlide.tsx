import { skillIcon } from '@/assets/skillData'
import arrowRight from '@/assets/vuesax/linear/arrow-right.svg'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
const SkillSlide = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-full h-72 bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <div className="flex justify-between items-center px-4 py-4 pb-16">
          <h1 className="text-white">Stack</h1>
          <img
            className="bg-[#cfcaca6e] w-7 h-7 bg-opacity-10 backdrop-blur-3xl rounded-full p-2 cursor-pointer"
            src={arrowRight}
            alt="arrow"
          />
        </div>
        <Marquee
          gradient={false}
          pauseOnHover
          speed={50}
          className=" flex items-center justify-center"
        >
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
