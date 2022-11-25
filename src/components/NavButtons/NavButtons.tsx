import { Dispatch, SetStateAction } from 'react'

interface NavButtonsProps {
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>
}

const NavButtons = (props: NavButtonsProps) => {
  const { setIsMenuOpen } = props

  const buttons = [
    { label: 'About', selector: 'about-section' },
    { label: 'Tech Stack', selector: 'tech-stack-section' },
    { label: 'Experience', selector: 'experience-section' },
    { label: 'Projects', selector: 'projects-section' },
  ]

  const handleClick = (selector: string) => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false)
    }
    console.log(selector)
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
      <a href="mailto:hello@lucassilbernagel.com" className="ContactButton">
        Say hello
      </a>
    </>
  )
}

export default NavButtons
