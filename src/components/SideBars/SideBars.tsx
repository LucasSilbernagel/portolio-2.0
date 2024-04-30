import SocialLinks from '../SocialLinks/SocialLinks'
import copy from 'copy-to-clipboard'
import './SideBars.css'
import { useState } from 'react'

const SideBars = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  const copyEmail = () => {
    copy('hello@lucassilbernagel.com')
    setShowCopiedMessage(true)
    setTimeout(() => {
      setShowCopiedMessage(false)
    }, 2000)
  }

  return (
    <>
      <div className="SocialLinks" data-testid="social-links-sidebar">
        <SocialLinks />
      </div>
      <div className="Email" data-testid="email-sidebar">
        <div
          className={`relative transition-all duration-1000 ${
            showCopiedMessage ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <span
            aria-live="polite"
            aria-relevant="all"
            className="absolute -top-12 -left-6"
          >
            {showCopiedMessage ? 'Copied!' : ''}
          </span>
        </div>
        <button
          onClick={copyEmail}
          aria-label="copy email address to clipboard: hello@lucassilbernagel.com"
          className="AccentFont tracking-widest"
        >
          hello@lucassilbernagel.com
        </button>
      </div>
    </>
  )
}

export default SideBars
