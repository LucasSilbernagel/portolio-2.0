import { format, parse } from 'date-fns'
import './ExperienceItem.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface IExperienceItemProps {
  experience?: {
    _key?: string | null
    companyWebsite?: string | null
    timeframe?: { startDate?: Date | null; endDate?: Date | null } | null
    title?: string | null
    company?: string | null
    accomplishments?: (string | null)[] | null
  } | null
}

export const formatFullMonthYear = (
  dateString: Date | string | null | undefined
) => {
  const parsedDate = parse(String(dateString), 'yyyy-MM', new Date())
  return format(parsedDate, 'MMMM yyyy')
}

const ExperienceItem = (props: IExperienceItemProps) => {
  const { experience } = props

  const timeframe = `${experience?.timeframe?.startDate} — ${
    experience?.timeframe?.endDate ? experience.timeframe.endDate : 'present'
  }`

  const timeframeLong = `${formatFullMonthYear(
    experience?.timeframe?.startDate
  )} to ${
    experience?.timeframe?.endDate
      ? formatFullMonthYear(experience.timeframe.endDate)
      : 'present'
  }`

  return (
    <li className="ExperienceItem" data-testid="experience-item">
      <div className="flex items-start pt-8">
        <div className="Timeline__circle">
          <div className="Timeline__Horizontal-Line--right"></div>
          <div className="Timeline__Horizontal-Line--left"></div>
          <div className="Timeline__time--desktop">
            <span aria-hidden="true">{timeframe}</span>
            <span className="sr-only">{timeframeLong}</span>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full px-6 pb-4 -mt-1">
            <div className="Timeline__time--mobile">
              <span aria-hidden="true">{timeframe}</span>
              <span className="sr-only">{timeframeLong}</span>
            </div>
            <h4 className="mb-3 text-2xl font-fira-code text-accent-1">
              {experience?.title}
            </h4>
            <h5 className="pb-3 text-xl font-bold text-slate-3 hover:text-accent-1 focus-visible:text-accent-1 duration-300 max-w-min sm:max-w-max">
              <a
                href={String(experience?.companyWebsite)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
                data-testid={String(experience?.companyWebsite)}
              >
                {experience?.company}{' '}
                <FaExternalLinkAlt className="ml-2 text-xs hidden md:flex" />
              </a>
            </h5>
            <ul>
              {experience?.accomplishments?.map((accomplishment, index) => {
                return (
                  <li
                    className="Timeline__accomplishment"
                    key={index}
                    data-testid={`${accomplishment?.replace(' ', '')}-${String(
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
