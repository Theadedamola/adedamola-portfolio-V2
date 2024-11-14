import { useState } from 'react'
import { frontendData } from '@/assets/frontendData'
import FrontendCard from './FrontendCard'
import { useSwipeable } from 'react-swipeable'

const FrontendList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % frontendData.length)
  }
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + frontendData.length) % frontendData.length
    )
  }

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackMouse: true,
  })

  return (
    <div {...handlers}>
      <FrontendCard
        {...frontendData[currentIndex]}
        onNextProject={handleNext}
        onPreviousProject={handlePrevious}
      />
    </div>
  )
}
export default FrontendList
