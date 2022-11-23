import { StaticImage } from 'gatsby-plugin-image'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className="Nav">
        <div>
          <button className="IconButton">
            <StaticImage
              src="../../images/profile-photo-wide.jpg"
              alt="Lucas Silbernagel"
              className="h-full w-full"
            />
          </button>
        </div>
        <div className="AccentFont NavButtons">
          <button>About</button>
          <button>Tech Stack</button>
          <button>Experience</button>
          <button>Projects</button>
          <a href="mailto:hello@lucassilbernagel.com" className="ContactButton">
            Say hello
          </a>
        </div>
        <div className="flex md:hidden">
          <label className="MobileMenu__Button" htmlFor="mobile-menu-button">
            <input type="checkbox" id="mobile-menu-button" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header
