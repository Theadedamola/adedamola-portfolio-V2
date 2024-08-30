import { useState } from 'react'
import DesignCard from './DesignCard'
import { caseStudy } from '@/assets/casestudy'

const DesignList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudy.length)
  }
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + caseStudy.length) % caseStudy.length
    )
  }
  return (
    <div>
      <DesignCard
        {...caseStudy[currentIndex]}
        onNextProject={handleNext}
        onPreviousProject={handlePrevious}
      />
    </div>
  )
}
export default DesignList
