import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'

interface NavBarProps {
  isMenuOpening: boolean
  isMenuOpen: boolean
  setIsMenuOpening: Dispatch<SetStateAction<boolean>>
}

const NavBar = (props: NavBarProps) => {
  const { isMenuOpening, setIsMenuOpening, isMenuOpen } = props

  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const handleScroll = () => {
    setCurrentScrollPos(window.pageYOffset)
    setPrevScrollPos(currentScrollPos)
    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isNavVisible, handleScroll])

  return (
    <nav
      className={`Nav ${
        isNavVisible
          ? 'top-0 bg-transparent backdrop-blur-[3px]'
          : 'top-[-100px]'
      } ${currentScrollPos > 80 ? 'shadow-lg pb-4' : ''}`}
    >
      <div className="z-10">
        <button className="IconButton">
          <StaticImage
            src="../../images/profile-photo-wide.jpg"
            alt="Lucas Silbernagel"
            className="h-full w-full"
          />
        </button>
      </div>
      <div className={`flex md:hidden z-20 fixed right-4`}>
        <button
          aria-label={isMenuOpening ? 'Close mobile menu' : 'Open mobile menu'}
          onClick={() => setIsMenuOpening(!isMenuOpening)}
          className={`MobileMenu__Button ${
            isMenuOpening ? 'MobileMenu__Button--open' : ''
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div>
        <div className="AccentFont NavButtons NavButtons__Desktop">
          <NavButtons />
        </div>
        <div
          className={`MobileMenu ${
            isMenuOpening
              ? 'animate-slide-in right-0'
              : 'animate-slide-out -right-[500px]'
          } ${isMenuOpen ? 'visible' : 'invisible'}`}
        >
          <div className="AccentFont NavButtons">
            <NavButtons setIsMenuOpening={setIsMenuOpening} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
