import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { navigate } from 'gatsby'

interface NavBarProps {
  isMenuOpening: boolean
  isMenuOpen: boolean
  setIsMenuOpening: Dispatch<SetStateAction<boolean>>
  isHomePage?: boolean
  isContactPage?: boolean
}

const NavBar = (props: NavBarProps) => {
  const {
    isMenuOpening,
    setIsMenuOpening,
    isMenuOpen,
    isHomePage = false,
    isContactPage = false,
  } = props

  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const handleScroll = () => {
    setCurrentScrollPos(window.pageYOffset)
    setPrevScrollPos(currentScrollPos)
    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70)
  }

  const handleIconButtonClick = () => {
    setIsMenuOpening(false)
    if (isHomePage) {
      scrollTo('#header')
    }
    if (!isHomePage) {
      navigate('/')
      setTimeout(() => {
        scrollTo('#header')
      }, 100)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isNavVisible, handleScroll])

  return (
    <nav
      className={`Nav ${
        isNavVisible
          ? 'top-0 backdrop-blur-[3px] bg-[rgba(11,25,46,0.9)]'
          : 'top-[-100px]'
      } ${currentScrollPos > 80 ? 'shadow-lg pb-4' : ''}`}
      data-testid="nav-bar"
    >
      <div className="z-10">
        <button
          className="IconButton"
          onClick={handleIconButtonClick}
          data-testid="icon-button"
        >
          <StaticImage
            src="../../images/profile-photo.jpg"
            alt="Lucas Silbernagel"
            className="h-full w-full"
          />
        </button>
      </div>
      <div className={`flex md:hidden z-20 fixed right-4`}>
        <button
          aria-label={isMenuOpening ? 'Close mobile menu' : 'Open mobile menu'}
          onClick={() => setIsMenuOpening(!isMenuOpen)}
          className={`MobileMenu__Button ${
            isMenuOpening ? 'MobileMenu__Button--open' : ''
          }`}
          data-testid="mobile-menu-button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div>
        <div
          className="AccentFont NavButtons NavButtons__Desktop"
          data-testid="nav-buttons-desktop"
        >
          <NavButtons isHomePage={isHomePage} isContactPage={isContactPage} />
        </div>
        <div
          className={`MobileMenu ${
            isMenuOpening
              ? 'animate-slide-in right-0'
              : 'animate-slide-out -right-[575px]'
          } ${isMenuOpen ? 'visible' : 'invisible'}`}
          data-testid="mobile-menu"
        >
          <div
            className="AccentFont NavButtons"
            data-testid="nav-buttons-mobile"
          >
            <NavButtons
              setIsMenuOpening={setIsMenuOpening}
              isHomePage={isHomePage}
              isContactPage={isContactPage}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
