import { useEffect } from "react"

const Modal = ({ children, setIsOpen }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px; 
      overflow-y: scroll; 
      width: 100%;
    `
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ""
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1)
    }
  }, [])

  return (
    <>
      {/* 모달창 뒤의 반투명 배경 */}
      <div
        className="absolute top-0 w-screen h-full bg-black/70 z-[100]"
        onClick={() => setIsOpen(false)}
      />

      {/* 모달창 내용 */}
      {children}
    </>
  )
}

export default Modal
