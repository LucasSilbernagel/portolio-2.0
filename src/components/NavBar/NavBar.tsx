import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { navigate } from 'gatsby'
import FocusTrap from 'focus-trap-react'

interface NavBarProps {
  isMenuOpening: boolean
  isMenuOpen: boolean
  setIsMenuOpening: Dispatch<SetStateAction<boolean>>
  windowWidth: number
}

const MenuContainer = ({
  isMenuOpening,
  windowWidth,
  children,
}: {
  isMenuOpening: boolean
  windowWidth: number
  children: ReactNode
}) => {
  return (
    <FocusTrap
      active={windowWidth < 768 && isMenuOpening}
      focusTrapOptions={{
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
      }}
    >
      <div
        role={windowWidth < 768 && isMenuOpening ? 'dialog' : undefined}
        aria-modal={windowWidth < 768 && isMenuOpening ? true : undefined}
        aria-label="navigation menu"
      >
        {children}
      </div>
    </FocusTrap>
  )
}

const NavBar = (props: NavBarProps) => {
  const { isMenuOpening, setIsMenuOpening, isMenuOpen, windowWidth } = props

  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY)
    setPrevScrollPos(currentScrollPos)
    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70)
  }

  const handleIconButtonClick = () => {
    setIsMenuOpening(false)
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      scrollTo('#header')
    }
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
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
          aria-label="home"
        >
          <StaticImage
            src="../../images/profile-photo.jpg"
            alt=""
            className="h-full w-full"
          />
        </button>
      </div>
      <MenuContainer isMenuOpening={isMenuOpening} windowWidth={windowWidth}>
        <div className={`flex md:hidden z-20 fixed right-4 top-[35px]`}>
          <button
            aria-label={
              isMenuOpening ? 'Close mobile menu' : 'Open mobile menu'
            }
            aria-expanded={isMenuOpening}
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
          <ul
            className="AccentFont NavButtons NavButtons__Desktop"
            data-testid="nav-buttons-desktop"
          >
            <NavButtons />
          </ul>
          <div
            className={`MobileMenu ${
              isMenuOpening
                ? 'animate-slide-in right-0'
                : 'animate-slide-out -right-[575px]'
            } ${isMenuOpen ? 'visible' : 'invisible'}`}
            data-testid="mobile-menu"
          >
            <ul
              className="AccentFont NavButtons"
              data-testid="nav-buttons-mobile"
            >
              <NavButtons setIsMenuOpening={setIsMenuOpening} />
            </ul>
          </div>
        </div>
      </MenuContainer>
    </nav>
  )
}

export default NavBar
