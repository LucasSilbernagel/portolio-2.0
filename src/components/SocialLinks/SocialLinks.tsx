import { FaGithub, FaLinkedin, FaSquare } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://github.com/LucasSilbernagel"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        data-testid="github-link"
      >
        <FaGithub size="1.2rem" />
      </a>
      <a
        href="https://www.linkedin.com/in/lucassilbernagel/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        data-testid="linkedin-link"
      >
        <FaLinkedin size="1.2rem" />
      </a>
      <a
        href="https://bsky.app/profile/lucassilbernagel.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Bluesky"
        data-testid="bluesky-link"
      >
        <FaSquare size="1.2rem" />
      </a>
    </>
  )
}

export default SocialLinks
