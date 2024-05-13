import SocialLinks from '../SocialLinks/SocialLinks'
import Sitemap from '../../content/sitemap'
import './Footer.css'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="mt-12 mb-6" data-testid="footer">
      <ul className="w-full md:w-[unset] p-6 flex gap-7 flex-wrap md:flex-col justify-center  md:ml-24 md:-mb-[54px]">
        {Sitemap.map((page) => {
          return (
            <li key={page.url}>
              <Link to={page.url}>{page.label}</Link>
            </li>
          )
        })}
      </ul>
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
