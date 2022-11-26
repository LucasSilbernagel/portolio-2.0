import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SideBars from '../SideBars/SideBars'

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
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed md:hidden top-0 left-0 w-full h-full backdrop-blur-[3px]"
        ></div>
      )}
      <SideBars />
    </header>
  )
}

export default Header
