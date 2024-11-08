import Button from '@/Components/Button'
import { motion } from 'framer-motion'
import me from '@/assets/me.jpeg'
import me1 from '@/assets/me1.jpg'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
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
      <div className="flex flex-col gap-2">
        <div className="relative flex gap-2">
          <img
            src={me}
            alt=""
            className="w-10 h-10 rounded-lg hover:absolute transition-all duration-300 hover:w-80 hover:h-80 hover:top-0 hover:left-0"
          />
          <img
            src={me1}
            alt=""
            className="w-10 h-10 rounded-lg hover:absolute transition-all duration-300 hover:w-80 hover:h-80 hover:top-0 hover:left-0"
          />
        </div>
        <h1 className="text-sm text-[#8a8a8a]">First of all</h1>
        <h1 className="text-4xl text-white font-reyka font-bold">
          Introduction
        </h1>
        <p className="text-[#8a8a8a]">
          As a seasoned UI/UX designer and a dedicated frontend engineer, I am
          passionate about shaping innovative and user-centric digital
          experiences. Over the course of three years, I have cultivated my
          expertise in product design and invested significant time mastering
          industry-standard frontend languages, including HTML, CSS, and
          JavaScript, along with proficiency in the React framework. This
          comprehensive skill set positions me as a valuable asset to any team
          or company. I excel in collaborative environments, working seamlessly
          with developers, designers, product managers, and stakeholders to
          ensure the successful and timely delivery of projects within budget
          constraints.
        </p>
        <Link to="/about">
          <Button variant="secondary" className="w-fit mt-4 text-[#c7c7c7]">
            About me.
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
export default ProfileCard
