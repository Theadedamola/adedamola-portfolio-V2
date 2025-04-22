import Button from '@/Components/Button'
import { motion } from 'framer-motion'
import profileMe from '@/assets/profile-me.png'
import { Link } from 'react-router-dom'
import gridLayers from '@/assets/Grid-layers.svg'

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
      <img
        src={gridLayers}
        className="absolute inset-0 w-full h-screen object-contain"
        alt="grid background"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl text-[#E94E35] font-reyka font-bold leading-tight">
            Building Products for the future
          </h1>
          <p className="text-[#8a8a8a] text-lg">
            With experience in UI/UX design and frontend engineering, I am
            driven to create innovative, user-focused digital experiences. This
            extensive skill set makes me a significant asset to any team or
            company.
          </p>
          <Link to="/about">
            <Button variant="secondary" className="w-fit mt-4 text-[#c7c7c7]">
              About me.
            </Button>
          </Link>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="w-fit h-[340px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-[40px]"></div>
            <img
              src={profileMe}
              alt="adedamola's portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 bg-black bg-opacity-40 backdrop-blur-sm p-6 rounded-2xl max-w-md">
            <p className="text-[#c7c7c7] italic mb-4">
              "I've had the pleasure of working with Adedamola on various
              occasions, and I must say, he is very dedicated to delivering good
              quality work."
            </p>
            <p className="text-[#8a8a8a]">-Adedotun (Business owner)</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default ProfileCard
