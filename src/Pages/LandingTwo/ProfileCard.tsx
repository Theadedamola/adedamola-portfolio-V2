import profile from '@/assets/me1.jpg'
import arrowRight from '@/assets/vuesax/linear/arrow-right.svg'
import { motion } from 'framer-motion'

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
      <div className="w-full h-full p-4 flex flex-col gap-2 bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#53535331]">
        <div className="flex justify-between items-center pb-2">
          <h1 className="text-white">Me</h1>
          <img
            className="bg-[#cfcaca6e] w-7 h-7 bg-opacity-10 backdrop-blur-3xl rounded-full p-2 cursor-pointer"
            src={arrowRight}
            alt="arrow"
          />
        </div>
        <div>
          <img
            className="w-full h-56 object-cover rounded-2xl"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="">
          <h1 className="text-xl text-white">Alausa</h1>
          <h1 className="text-4xl text-white font-reyka font-bold">
            Adedamola
          </h1>
        </div>
      </div>
    </motion.div>
  )
}
export default ProfileCard
