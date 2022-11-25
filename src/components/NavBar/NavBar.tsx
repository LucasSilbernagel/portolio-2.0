import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, SetStateAction } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'

interface NavBarProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const NavBar = (props: NavBarProps) => {
  const { isMenuOpen, setIsMenuOpen } = props

  return (
    <nav className="Nav">
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
