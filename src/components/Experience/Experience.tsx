import './Experience.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SmoothCollapse from 'react-smooth-collapse'
import { useState } from 'react'
import ExperienceItem from './ExperienceItem/ExperienceItem'
import { graphql, useStaticQuery } from 'gatsby'
import { ExperienceQuery } from '../../../graphql-types'

const Experience = () => {
  const data: ExperienceQuery = useStaticQuery(graphql`
    query Experience {
      sanityHomepage {
        experience {
          _key
          title
          company
          companyWebsite
          timeframe {
            startDate(formatString: "YYYY-MM")
            endDate(formatString: "YYYY-MM")
          }
          accomplishments
        }
      }
    }
  `)

  const [isShowingMore, setIsShowingMore] = useState(false)

  const experienceData = data.sanityHomepage?.experience
  const orderedExperienceData = experienceData?.concat().reverse()

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="Experience"
        id="experience-section"
        data-testid="experience-section"
      >
        <h3 className="SectionHeader" aria-label="Experience">
          Experience
        </h3>
        <div className="Timeline">
          <div className="Timeline__container">
            <div className="Timeline__Vertical-Line"></div>
            {orderedExperienceData && (
              <ol>
                {orderedExperienceData.slice(0, 3).map((experience) => {
                  return (
                    <ExperienceItem
                      key={experience?._key}
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
                      {orderedExperienceData
                        .slice(3, orderedExperienceData.length)
                        .map((experience, index) => {
                          return (
                            <ExperienceItem
                              key={`${experience?.companyWebsite}-${index}`}
                              experience={experience}
                            />
                          )
                        })}
                    </ol>
                  </SmoothCollapse>
                </li>
                <li>
                  <div className="w-full flex justify-center">
                    <button
                      className="AccentButton"
                      onClick={() => setIsShowingMore(!isShowingMore)}
                      data-testid="read-more-button"
                      aria-expanded={isShowingMore}
                    >
                      {isShowingMore ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </li>
              </ol>
            )}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Experience
