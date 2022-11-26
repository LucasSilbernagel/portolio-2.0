import { StaticImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SideBars from '../SideBars/SideBars'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    /** Close menu when Escape key is pressed */
    if (isMenuOpen) {
      /** Close menu when Escape key is pressed */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false)
        }
      })
      /** Prevent scrolling when the menu is open. */
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', (e) => e.key === 'Escape')
      document.body.style.overflow = 'scroll'
    }
  }, [isMenuOpen])

  return (
    <header>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="HeroText">
        <h1>Lucas Silbernagel</h1>
        <h2>Front-End Developer</h2>
        <a
          href="mailto:hello@lucassilbernagel.com"
          className="AccentFont ContactButton"
        >
          Say hello
        </a>
      </div>
      {window.innerHeight >= 600 && (
        <div className="HeroImage">
          <StaticImage alt="" src="../../images/toronto.png" />
        </div>
      )}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="MobileMenu__Background"
        ></div>
      )}
      <SideBars />
    </header>
  )
}

export default Header
