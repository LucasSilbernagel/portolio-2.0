import './Experience.css'
import { EXPERIENCE } from '../../content/experience'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SmoothCollapse from 'react-smooth-collapse'
import { useState } from 'react'
import ExperienceItem from './ExperienceItem/ExperienceItem'

const Experience = () => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="Experience"
        id="experience-section"
        data-testid="experience-section"
      >
        <h3 className="SectionHeader">Experience</h3>
        <div className="Timeline">
          <div className="Timeline__container">
            <div className="Timeline__Vertical-Line"></div>
            <ol>
              {EXPERIENCE.slice(0, 3).map((experience, index) => {
                return (
                  <ExperienceItem
                    key={`${experience.website}-${index}`}
                    experience={experience}
                  />
                )
              })}
              <li>
                <SmoothCollapse
                  expanded={isShowingMore}
                  allowOverflowWhenOpen={true}
                >
                  <ol>
                    {EXPERIENCE.slice(3, EXPERIENCE.length).map(
                      (experience, index) => {
                        return (
                          <ExperienceItem
                            key={`${experience.website}-${index}`}
                            experience={experience}
                          />
                        )
                      }
                    )}
                  </ol>
                </SmoothCollapse>
              </li>
              <li>
                <div className="w-full flex justify-center">
                  <button
                    className="AccentButton"
                    onClick={() => setIsShowingMore(!isShowingMore)}
                    data-testid="read-more-button"
                  >
                    {isShowingMore ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Experience
