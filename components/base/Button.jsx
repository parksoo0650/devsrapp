import { useRouter } from 'next/router'
import { animation, util } from '@/styles/tailwind'

/**
 * 버튼.
 */
const Button = ({ href, onClick, children, className }) => {
  const router = useRouter()

  return (
    <div
      className={`${animation.onClick} ${util.fixImageHeight} ${className}`}
      onClick={() => {
        href && router.push(href)
        onClick && onClick()
      }}
    >
      {children}
    </div>
  )
}

export default Button
