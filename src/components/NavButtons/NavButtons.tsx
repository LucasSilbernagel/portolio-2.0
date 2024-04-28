import { Dispatch, SetStateAction } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Link, navigate } from 'gatsby'

interface NavButtonsProps {
  setIsMenuOpening?: Dispatch<SetStateAction<boolean>>
  isHomePage?: boolean
  isContactPage?: boolean
}

const NavButtons = (props: NavButtonsProps) => {
  const { setIsMenuOpening, isHomePage = false, isContactPage = false } = props

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
    if (isHomePage) {
      scrollTo(selector)
    }
    if (!isHomePage) {
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
          <button
            key={button.selector}
            onClick={() => handleClick(button.selector)}
          >
            {button.label}
          </button>
        )
      })}
      {isContactPage ? (
        <Link to="/" className="ContactButton">
          Homepage
        </Link>
      ) : (
        <Link to="/contact" className="ContactButton">
          Say hello
        </Link>
      )}
    </>
  )
}

export default NavButtons
