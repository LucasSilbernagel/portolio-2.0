import { PROJECTS } from '../../content/projects'
import './ProjectArchive.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import InfiniteScroll from 'react-infinite-scroller'
import { useEffect, useState } from 'react'

interface IProject {
  name: string
  year: string
  description: string
  techStack: string[]
  github: string
  liveLink: string
}

const ProjectArchive = () => {
  const itemsPerPage = 4
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(PROJECTS)
  const [searchValue, setSearchValue] = useState<string>('')
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [records, setRecords] = useState<number>(itemsPerPage)
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false)

  useEffect(() => {
    if (searchValue.length > 0) {
      setIsLoadingSearch(true)
      const delayFn = setTimeout(() => {
        setFilteredProjects(
          PROJECTS.filter((project) =>
            JSON.stringify(project)
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        )
        setIsLoadingSearch(false)
      }, 1000)
      return () => clearTimeout(delayFn)
    } else {
      setIsLoadingSearch(true)
      const delayFn = setTimeout(() => {
        setFilteredProjects(PROJECTS)
        setIsLoadingSearch(false)
      }, 1000)
      return () => clearTimeout(delayFn)
    }
  }, [searchValue])

  const loadMore = () => {
    if (records === filteredProjects.length) {
      setHasMore(false)
    } else {
      setTimeout(() => {
        if (records + itemsPerPage > filteredProjects.length) {
          setRecords(filteredProjects.length)
        } else setRecords(records + itemsPerPage)
      }, 1000)
    }
  }

  const renderArchiveProject = (project: IProject, index: number) => {
    return (
      <li key={`${project.github}`}>
        <div className="Project">
          <div className="flex justify-between mb-4">
            <div>
              <h3
                className="AccentFont text-accent-1"
                data-testid={`project-year-${index}`}
              >
                {project.year}
              </h3>
            </div>
            <div className="flex gap-8 text-lg justify-end">
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub repository for ${project.name}`}
                  className="IconLink"
                  data-testid={`github-project-link-${index}`}
                >
                  <FaGithub />
                </a>
              </div>
              <div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`live link for ${project.name}`}
                  className="IconLink"
                  data-testid={`external-project-link-${index}`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
          <h4>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`live link for ${project.name}`}
              className="ProjectName"
            >
              {project.name}
            </a>
          </h4>
          <div className=" text-sm text-slate-2 tracking-wide my-6">
            <p>{project.description}</p>
          </div>
          <div className="text-slate-2 text-sm font-fira-code mb-6">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {project.techStack.map((skill, skillIndex) => {
                return (
                  <li
                    key={`${project.github}-${skill.replace(
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

  const showProjects = (projects: IProject[]) => {
    const items = []
    for (let i = 0; i < records; i++) {
      items.push(renderArchiveProject(projects[i], i))
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
        <div className="w-full flex justify-center mb-8">
          <form>
            <label htmlFor="searchInput" className="sr-only">
              Filter projects by keyword
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder="Filter projects by keyword..."
              className="text-black bg-white-1 w-[300px] py-2 px-3 rounded-sm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </div>
        {isLoadingSearch ? (
          <div className="w-full flex justify-center" key="loader">
            <div className="Loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="mt-12 mb-10">
            <p className="AccentFont text-center text-accent-1">
              Showing {filteredProjects.length} of {PROJECTS.length} projects
            </p>
          </div>
        )}

        {filteredProjects.length > 0 ? (
          filteredProjects.length > itemsPerPage ? (
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
              {showProjects(filteredProjects)}
            </InfiniteScroll>
          ) : (
            <ul>
              {filteredProjects.map((project, index) => {
                return renderArchiveProject(project, index)
              })}
            </ul>
          )
        ) : (
          <div className="mt-12 mb-24">
            <p className="text-center text-2xl">No matching projects found!</p>
          </div>
        )}
      </div>
    </AnimationOnScroll>
  )
}

export default ProjectArchive
