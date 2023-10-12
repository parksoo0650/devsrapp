import { useEffect, useState } from 'react'

const useScrollDetector = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let before = 0
    window.addEventListener('scroll', (event) => {
      if (before < window.scrollY) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }
      before = window.scrollY
    })
  }, [])
  return {
    // isScrollingDown: isLoading || before < window.scrollY
    isScrollingDown,
  }
}

export default useScrollDetector
