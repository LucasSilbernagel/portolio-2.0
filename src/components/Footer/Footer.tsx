import SocialLinks from '../SocialLinks/SocialLinks'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-12 mb-6" data-testid="footer">
      <div className="IconLinks" data-testid="social-links">
        <SocialLinks />
      </div>
      <div className="TextLinks">
        <p className="mb-4">
          Design inspired by{' '}
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
          >
            Brittany Chiang
          </a>
        </p>
        <p>
          Built by{' '}
          <a
            href="https://github.com/LucasSilbernagel/portolio-2.0"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Silbernagel
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
