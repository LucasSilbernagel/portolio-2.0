import './ExperienceItem.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface IExperienceItemProps {
  experience: {
    website: string
    timeframe: string
    timeframeLong: string
    title: string
    company: string
    accomplishments: string[]
  }
}

const ExperienceItem = (props: IExperienceItemProps) => {
  const { experience } = props

  return (
    <li className="ExperienceItem" data-testid="experience-item">
      <div className="flex items-start pt-8">
        <div className="Timeline__circle">
          <div className="Timeline__Horizontal-Line--right"></div>
          <div className="Timeline__Horizontal-Line--left"></div>
          <div className="Timeline__time--desktop">
            <span aria-hidden="true">{experience.timeframe}</span>
            <span className="sr-only">{experience.timeframeLong}</span>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full px-6 pb-4 -mt-1">
            <div className="Timeline__time--mobile">
              <span aria-hidden="true">{experience.timeframe}</span>
              <span className="sr-only">{experience.timeframeLong}</span>
            </div>
            <h4 className="mb-3 text-2xl font-fira-code text-accent-1">
              {experience.title}
            </h4>
            <h5 className="pb-3 text-xl font-bold text-slate-3 hover:text-accent-1 focus:text-accent-1 duration-300 max-w-min sm:max-w-max">
              <a
                href={experience.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
                data-testid={experience.website}
              >
                {experience.company}{' '}
                <FaExternalLinkAlt className="ml-2 text-xs hidden md:flex" />
              </a>
            </h5>
            <ul>
              {experience.accomplishments.map((accomplishment, index) => {
                return (
                  <li
                    className="Timeline__accomplishment"
                    key={index}
                    data-testid={`${accomplishment.replace(' ', '')}-${String(
                      index
                    )}`}
                  >
                    {accomplishment}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ExperienceItem
