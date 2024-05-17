import { Dispatch, SetStateAction } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Link, navigate } from 'gatsby'

interface NavButtonsProps {
  setIsMenuOpening?: Dispatch<SetStateAction<boolean>>
}

const NavButtons = (props: NavButtonsProps) => {
  const { setIsMenuOpening } = props

  const buttons = [
    { label: 'About', selector: '#about-section' },
    { label: 'Tech Stack', selector: '#tech-stack-section' },
    { label: 'Experience', selector: '#experience-section' },
    { label: 'Projects', selector: '#projects-section' },
  ]

  const handleClick = (selector: string) => {
    if (setIsMenuOpening) {
      setIsMenuOpening(false)
    }
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      scrollTo(selector)
    }
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollTo(selector)
      }, 500)
    }
  }

  return (
    <>
      {buttons.map((button) => {
        return (
          <li key={button.selector}>
            <button
              onClick={() => handleClick(button.selector)}
              aria-label={button.label}
            >
              {button.label}
            </button>
          </li>
        )
      })}
      {typeof window !== 'undefined' &&
      window.location.pathname === '/contact' ? (
        <li>
          <Link to="/" className="ContactButton">
            Homepage
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/contact" className="ContactButton">
            Say hello
          </Link>
        </li>
      )}
    </>
  )
}

export default NavButtons
