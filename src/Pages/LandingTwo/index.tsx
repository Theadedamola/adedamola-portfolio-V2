import ProfileCard from './ProfileCard'
import WorkSlide from './WorkSlide'
import SkillSlide from './SkillSlide'
import VarietySlide from './VarietySlide'

const LandingIndex = () => {
  return (
    <div>
      <div className="z-40 relative grid grid-cols-6 gap-4 justify-between w-full">
        <div className="col-span-2">
            <ProfileCard />
        </div>
        <div className="col-span-4">
            <WorkSlide />
        </div>
        <div className="col-span-4">
            <SkillSlide />
        </div>
        <div className="col-span-2">
            <VarietySlide />
        </div>
      </div>
    </div>
  )
}
export default LandingIndex
