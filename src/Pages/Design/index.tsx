import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
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

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackMouse: true,
  })

  return (
    <div {...handlers}>
      <DesignCard
        {...caseStudy[currentIndex]}
        onNextProject={handleNext}
        onPreviousProject={handlePrevious}
      />
    </div>
  )
}
export default DesignList
