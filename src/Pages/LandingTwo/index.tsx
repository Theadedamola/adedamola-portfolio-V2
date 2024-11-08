import ProfileCard from './ProfileCard'
import WorkSlide from './WorkSlide'
import SkillSlide from './SkillSlide'
import VarietySlide from './VarietySlide'
import Testimonial from './Testimonial'
import Connect from './Connect'

const LandingIndex = () => {
  return (
    <div className="px-6 md:px-14 lg:px-40 flex flex-col gap-24 w-full max-w-[1440px] py-[180px]">
      <ProfileCard />
      <WorkSlide />
      <SkillSlide />
      <VarietySlide />
      <Testimonial />
      <Connect />
    </div>
  )
}
export default LandingIndex
