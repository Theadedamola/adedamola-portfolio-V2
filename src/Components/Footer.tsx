import { Link } from 'react-router-dom'
import nameImg from '@/assets/name.png'


const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <div className="h-fit w-full px-6 py-16 md:px-16 flex flex-col space-y-10 items-center bg-[#090909]">
      <img src={nameImg} alt="adedamola" />
      <hr className="w-full border border-solid border-[#E14842]" />
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-40">
        <div className="flex flex-col gap-6 items-center">
          <p className="text-white">Send me a mail</p>
          <Link to={'mailto:adedamolajose@gmail.com'}>
            <p className="text-[#E14842] text-3xl font-reyka hover:text-2xl transition-all duration-300">
              adedamolajose@gmail.com
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-white">Hit me up on socials</p>
          <ul className="flex gap-6 text-[#E14842] font-reyka text-3xl">
            <li className="hover:text-2xl transition-all duration-300">
              <Link to={'https://www.behance.net/damolaalausa'}>be</Link>
            </li>
            <li className="hover:text-2xl transition-all duration-300">
              <Link
                to={
                  'https://github.com/Theadedamola?tab=overview&from=2024-07-01&to=2024-07-18'
                }
              >
                gh
              </Link>
            </li>
            <li className="hover:text-2xl transition-all duration-300">
              <Link to={'https://x.com/Theadedamola_'}>x(tw)</Link>
            </li>
            <li className="hover:text-2xl transition-all duration-300">
              <Link
                to={
                  'https://www.linkedin.com/in/adedamola-alausa/?profileId=ACoAADo6sI0B8r3x19-qYVm_jcnJ86tqpDSX3Cg'
                }
              >
                in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center">
        Designed and built by me with ❤️. ©Adedamola Alausa {date}
      </p>
    </div>
  )
}
export default Footer
