import './Experience.css'
import { EXPERIENCE } from '../../content/experience'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className="Experience" id="experience-section">
      <h3 className="SectionHeader">Experience</h3>
      <div className="Timeline">
        <div className="Timeline__container">
          <div className="Timeline__Vertical-Line"></div>
          <ol>
            {EXPERIENCE.map((experience, index) => {
              return (
                <li key={index} className="mb-5">
                  <div className="flex items-start pt-8">
                    <div className="Timeline__circle">
                      <div className="Timeline__Horizontal-Line--right"></div>
                      <div className="Timeline__Horizontal-Line--left"></div>
                      <div className="Timeline__time--desktop">
                        <span>{experience.timeframe}</span>
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="w-full px-6 pb-4 -mt-1">
                        <div className="Timeline__time--mobile">
                          <span>{experience.timeframe}</span>
                        </div>
                        <h4 className="mb-3 text-2xl font-fira-code text-accent-1">
                          {experience.title}
                        </h4>
                        <h5 className="pb-3 text-xl font-bold text-white-2 hover:text-accent-1 focus:text-accent-1 duration-300">
                          <a
                            href={experience.website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center"
                          >
                            {experience.company}{' '}
                            <FaExternalLinkAlt className="ml-2 text-xs" />
                          </a>
                        </h5>
                        <ul>
                          {experience.accomplishments.map(
                            (accomplishment, index) => {
                              return (
                                <li
                                  className="Timeline__accomplishment"
                                  key={index}
                                >
                                  {accomplishment}
                                </li>
                              )
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Experience
