import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'
import './AboutSection.css'
import SmoothCollapse from 'react-smooth-collapse'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ABOUT from '../../content/about'

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
            <p>{ABOUT[0]}</p>
            <p>{ABOUT[1]}</p>
            <SmoothCollapse expanded={isShowingMore}>
              <p>{ABOUT[2]}</p>
              <p>{ABOUT[3]}</p>
              <p>{ABOUT[4]}</p>
              <p>{ABOUT[5]}</p>
            </SmoothCollapse>
            <div className="w-full flex justify-center">
              <button
                className="AccentButton"
                onClick={() => setIsShowingMore(!isShowingMore)}
                data-testid="read-more-button"
              >
                {isShowingMore ? 'Read less' : 'Read more'}
              </button>
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
