import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'

interface NavBarProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const NavBar = (props: NavBarProps) => {
  const { isMenuOpen, setIsMenuOpen } = props

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
      <div>
        <div className="AccentFont NavButtons NavButtons__Desktop">
          <NavButtons />
        </div>
        <div
          className={`MobileMenu ${
            isMenuOpen
              ? 'visible animate-slide-in'
              : 'invisible animate-slide-out'
          }`}
        >
          <div className="AccentFont NavButtons">
            <NavButtons setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
      <div className="flex md:hidden z-10 self-end">
        <label className="MobileMenu__Button" htmlFor="mobile-menu-button">
          <input
            type="checkbox"
            id="mobile-menu-button"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  )
}

export default NavBar
