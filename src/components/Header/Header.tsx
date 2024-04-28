import { StaticImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SideBars from '../SideBars/SideBars'
import './Header.css'
import { Link } from 'gatsby'

const Header = () => {
  const [isMenuOpening, setIsMenuOpening] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWindowHeight])

  useEffect(() => {
    if (isMenuOpening) {
      /** Close menu when Escape key is pressed */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpening(false)
        }
      })
      setIsMenuOpen(true)
      /** Prevent scrolling when the menu is open. */
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', (e) => e.key === 'Escape')
      document.body.style.overflow = 'scroll'
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 500)
    }
  }, [isMenuOpening, isMenuOpen])

  return (
    <header
      className={`scroll-mt-72 ${
        window.location.pathname === '/' ? 'Header' : ''
      }`}
      id="header"
      data-testid="header"
    >
      <NavBar
        isMenuOpening={isMenuOpening}
        setIsMenuOpening={setIsMenuOpening}
        isMenuOpen={isMenuOpen}
      />
      {window.location.pathname === '/' && (
        <>
          <div className="HeroText">
            <h1>Lucas Silbernagel</h1>
            <h2>Software Developer</h2>
            <Link
              to="/contact"
              className="AccentButton relative z-10"
              data-testid="hero-contact-link"
            >
              Say hello
            </Link>
          </div>
          {windowHeight >= 568 && (
            <div className="HeroImage" data-testid="hero-image">
              <StaticImage alt="" src="../../images/toronto.png" />
            </div>
          )}
        </>
      )}
      {isMenuOpening && (
        <div
          onClick={() => setIsMenuOpening(false)}
          className="MobileMenu__Background"
        ></div>
      )}
      <SideBars />
    </header>
  )
}

export default Header
