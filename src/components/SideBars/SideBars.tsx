import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './SideBars.css'

const SideBars = () => {
  return (
    <>
      <div className="SocialLinks">
        <a
          href="https://github.com/LucasSilbernagel"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="1.2rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucassilbernagel/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="1.2rem" />
        </a>
        <a
          href="https://twitter.com/LucasCodePro"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size="1.2rem" />
        </a>
      </div>
      <div className="Email">
        <a className="AccentFont" href="mailto:hello@lucassilbernagel.com">
          hello@lucassilbernagel.com
        </a>
      </div>
    </>
  )
}

export default SideBars
