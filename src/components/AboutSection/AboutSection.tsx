import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'
import './AboutSection.css'
import SmoothCollapse from 'react-smooth-collapse'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ABOUT from '../../content/about'
import { Link } from 'gatsby'

const AboutSection = () => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="AboutSection"
        id="about-section"
        data-testid="about-section"
      >
        <h3 className="SectionHeader">About Me</h3>
        <div className="flex gap-12 flex-col xl:flex-row">
          <div>
            <p>
              Hi, I&apos;m Lucas! I&apos;m a software developer based in
              Toronto, Canada. I specialize in front-end development, and
              I&apos;ve been working in the industry since 2020. My
              contributions can be found in the codebases of an environmental
              nonprofit, a cleantech startup, a quantum computing startup, and
              an online casino and sportsbook. I&apos;m passionate about
              creating remarkable and accessible user experiences that everyone
              can enjoy.
            </p>
            <div className="w-full flex justify-center">
              <Link to="/my-story" className="AccentButton">
                Read my story
              </Link>
            </div>
          </div>
          <div className="max-w-[300px] w-auto xl:w-max mx-auto xl:ml-0">
            <div className="PhotoContainer">
              <StaticImage
                alt="Lucas Silbernagel"
                src="../../images/profile-photo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutSection
