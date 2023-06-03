import { Dispatch, SetStateAction } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { navigate } from 'gatsby'

interface NavButtonsProps {
  isHomePage: boolean
  setIsMenuOpening?: Dispatch<SetStateAction<boolean>>
}

const NavButtons = (props: NavButtonsProps) => {
  const { setIsMenuOpening, isHomePage } = props

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
      <a
        href="mailto:hello@lucassilbernagel.com"
        target="_blank"
        rel="noreferrer"
        className="ContactButton"
      >
        Say hello
      </a>
    </>
  )
}

export default NavButtons
