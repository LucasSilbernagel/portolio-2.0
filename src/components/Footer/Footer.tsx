import SocialLinks from '../SocialLinks/SocialLinks'
import Sitemap from '../../content/sitemap'
import { Link } from 'gatsby'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-12 mb-6" data-testid="footer">
      <ul className="Sitemap">
        {Sitemap.map((page) => {
          return (
            <li key={page.url}>
              {typeof window !== 'undefined' &&
              window.location.pathname === page.url ? (
                <span>{page.label}</span>
              ) : (
                <Link to={page.url}>{page.label}</Link>
              )}
            </li>
          )
        })}
      </ul>
      <ul className="IconLinks" data-testid="social-links">
        <SocialLinks />
      </ul>
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
