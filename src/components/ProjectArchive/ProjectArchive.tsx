import { PROJECTS } from '../../content/projects'
import './ProjectArchive.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import InfiniteScroll from 'react-infinite-scroller'
import { useState } from 'react'

interface IProject {
  name: string
  year: string
  description: string
  techStack: string[]
  github: string
  liveLink: string
  imageFileName?: string
}

const ProjectArchive = () => {
  const getItemsPerPage = (number: number) => {
    const divisors: number[] = []
    for (let divisor = 1; divisor <= number; divisor++) {
      if (number % divisor === 0) {
        divisors.push(divisor)
      }
    }
    const idealDivisors = divisors.filter(
      (divisor) => divisor > 2 && divisor < 13
    )
    if (idealDivisors.length > 0) {
      return idealDivisors[0]
    } else return divisors.sort((a, b) => a - b)[0]
  }

  const itemsPerPage = getItemsPerPage(PROJECTS.length)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [records, setRecords] = useState<number>(itemsPerPage)

  const loadMore = () => {
    if (records === PROJECTS.length) {
      setHasMore(false)
    } else {
      setTimeout(() => {
        setRecords(records + itemsPerPage)
      }, 1000)
    }
  }

  const showProjects = (projects: IProject[]) => {
    const items = []
    for (let i = 0; i < records; i++) {
      items.push(
        <li key={`${projects[i].github}`}>
          <div className="Project">
            <div className="flex justify-between mb-4">
              <div>
                <h3
                  className="AccentFont text-accent-1"
                  data-testid={`project-year-${i}`}
                >
                  {projects[i].year}
                </h3>
              </div>
              <div className="flex gap-8 text-lg justify-end">
                <div>
                  <a
                    href={projects[i].github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repository for ${projects[i].name}`}
                    className="IconLink"
                    data-testid={`github-project-link-${i}`}
                  >
                    <FaGithub />
                  </a>
                </div>
                <div>
                  <a
                    href={projects[i].liveLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`live link for ${projects[i].name}`}
                    className="IconLink"
                    data-testid={`external-project-link-${i}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <h4>
              <a
                href={projects[i].liveLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`live link for ${projects[i].name}`}
                className="ProjectName"
              >
                {projects[i].name}
              </a>
            </h4>
            <div className=" text-sm text-slate-2 tracking-wide my-6">
              <p>{projects[i].description}</p>
            </div>
            <div className="text-slate-2 text-sm font-fira-code mb-6">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {projects[i].techStack.map((skill, skillIndex) => {
                  return (
                    <li
                      key={`${projects[i].github}-${skill.replace(
                        / /g,
                        ''
                      )}-${skillIndex}-mobile`}
                    >
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </li>
      )
    }
    return items
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="ProjectArchive"
        id="project-archive"
        data-testid="project-archive"
      >
        <h1>Project Archive</h1>
        <h2 className="AccentFont">
          Educational, freelance, and side projects I&apos;ve completed over the
          years
        </h2>
        <InfiniteScroll
          element="ul"
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={
            <div className="w-full flex justify-center" key="loader">
              <div className="Loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          }
        >
          {showProjects(PROJECTS)}
        </InfiniteScroll>
      </div>
    </AnimationOnScroll>
  )
}

export default ProjectArchive
