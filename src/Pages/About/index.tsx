import Connect from '../LandingTwo/Connect'
import Education from './Education'
import Enjoy from './Enjoy'
import Me from './AboutMe'

const AboutMe = () => {
  return (
    <div className="px-6 md:px-14 lg:px-40 flex flex-col justify-center items-center gap-24 w-full py-[180px]">
      <Me />
      <Education />
      <Enjoy />
      <Connect />
    </div>
  )
}
export default AboutMe
