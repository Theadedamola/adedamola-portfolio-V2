import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { skillIcon } from '@/assets/skillData'
import Button from '@/Components/Button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LandingPage = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const wordVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeInOut' },
      },
    }
  return (
    <div className="relative w-full h-screen bg-hero-bg bg-cover bg-no-repeat px-6 md:px-16 flex flex-col items-center pt-[130px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="z-40 relative flex justify-between w-full">
        <Link to="/work">
          <h1 className="text-4xl lg:text-5xl font-reyka text-white">Work.</h1>
        </Link>
        <Link to="/about">
          <h1 className="text-4xl lg:text-5xl font-reyka text-white">About.</h1>
        </Link>
      </div>
      <div className="z-40 mt-16 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.h1
            ref={ref}
            className="text-4xl lg:text-5xl font-reyka text-white"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {/* Split the text into words */}
            {'Hello, I`m Adedamola'.split(' ').map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            ref={ref}
            className="text-4xl lg:text-5xl font-reyka text-white"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1,
                },
              },
            }}
          >
            {'Ux Engineer'.split(' ').map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{' '}
              </motion.span>
            ))}
          </motion.p>
          <p className="text-white lg:w-full text-center">
            "The purpose of design is to make things better, not just look
            better." - Vitaly Friedman
          </p>
          <Link to="/work">
            <Button variant="secondary">View Work</Button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 mt-14 py-10 bg-black bg-opacity-25 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
          <Marquee gradient={false} speed={50}>
            {skillIcon.map((skill) => (
              <img
                key={skill.id}
                src={skill.image}
                alt={`Skill ${skill.id}`}
                className="h-12 mx-4"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
