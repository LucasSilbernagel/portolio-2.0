import './SideBars.css'
import SocialLinks from '../SocialLinks/SocialLinks'

const SideBars = () => {
  return (
    <>
      <div className="SocialLinks" data-testid="social-links-sidebar">
        <SocialLinks />
      </div>
      <div className="Email" data-testid="email-sidebar">
        <a
          className="AccentFont"
          href="mailto:hello@lucassilbernagel.com"
          target="_blank"
          rel="noreferrer"
        >
          hello@lucassilbernagel.com
        </a>
      </div>
    </>
  )
}

export default SideBars
