import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaBluesky } from 'react-icons/fa6'

const SocialLinks = () => {
  return (
    <>
      <li>
        <a
          href="https://github.com/LucasSilbernagel"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          data-testid="github-link"
        >
          <FaGithub size="1.2rem" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lucassilbernagel/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          data-testid="linkedin-link"
        >
          <FaLinkedin size="1.2rem" />
        </a>
      </li>
      <li>
        <a
          href="https://bsky.app/profile/lucassilbernagel.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Bluesky"
          data-testid="bluesky-link"
        >
          <FaBluesky size="1.2rem" />
        </a>
      </li>
    </>
  )
}

export default SocialLinks
