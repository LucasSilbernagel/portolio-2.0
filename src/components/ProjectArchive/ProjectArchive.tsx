import { FaTimes } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import InfiniteScroll from 'react-infinite-scroller'
import { useEffect, useState } from 'react'
import ArchiveProject, { IProject } from '../ArchiveProject/ArchiveProject'
import Loader from '../Loader/Loader'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectArchiveQuery } from '../../../graphql-types'

const ProjectArchive = () => {
  const data: ProjectArchiveQuery = useStaticQuery(graphql`
    query ProjectArchive {
      allSanityProject(sort: { order: DESC, fields: _createdAt }) {
        nodes {
          name
          year
          description
          techStack
          githubProjectLink
          liveLink
        }
      }
    }
  `)

  const projects = data.allSanityProject.nodes
  const itemsPerPage = 4
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects)
  const [searchValue, setSearchValue] = useState<string>('')
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [records, setRecords] = useState<number>(itemsPerPage)
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false)

  useEffect(() => {
    if (searchValue.length > 0) {
      setIsLoadingSearch(true)
      const delayFn = setTimeout(() => {
        setFilteredProjects(
          projects.filter((project) =>
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
        setFilteredProjects(projects)
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

  const showProjects = (projects: IProject[]) => {
    const items = []
    for (let i = 0; i < records; i++) {
      if (projects.length >= records) {
        items.push(
          <ArchiveProject
            key={projects[i].githubProjectLink}
            project={projects[i]}
            index={i}
          />
        )
      }
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
        <h1>Project archive</h1>
        <h2 className="AccentFont">
          {`Educational, freelance, and side projects I've completed over the
          years.`}
        </h2>
        <div className="w-full flex justify-center mb-8">
          <form
            aria-controls="project-count"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="searchInput" className="sr-only">
              Filter projects by keyword
            </label>
            <div className="relative">
              <input
                id="searchInput"
                type="text"
                placeholder="Filter projects by keyword..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-[300px]"
                data-testid="archive-filter-input"
              />
              {searchValue.length > 0 && (
                <div className="absolute text-gray-600 top-2.5 right-3">
                  <button
                    onClick={() => setSearchValue('')}
                    aria-label="clear input"
                    className="hover:contrast-75"
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        {isLoadingSearch ? (
          <div className="w-full flex justify-center" key="loader">
            <Loader />
          </div>
        ) : (
          <div className="mt-12 mb-10" id="project-count" aria-live="polite">
            <p className="AccentFont text-center text-accent-1">
              Showing {filteredProjects.length} of {projects.length} projects
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
                <li className="w-full flex justify-center" key="loader">
                  <Loader />
                </li>
              }
            >
              {showProjects(filteredProjects)}
            </InfiniteScroll>
          ) : (
            <ul>
              {filteredProjects.map((project, index) => {
                return (
                  <ArchiveProject
                    key={project.githubProjectLink}
                    project={project}
                    index={index}
                  />
                )
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
