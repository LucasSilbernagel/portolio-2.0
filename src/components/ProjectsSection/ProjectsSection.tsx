import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { ProjectsQuery } from '../../../graphql-types'
import './ProjectsSection.css'

const ProjectsSection = () => {
  const data: ProjectsQuery = useStaticQuery(graphql`
    query Projects {
      allSanityProject(
        sort: { order: DESC, fields: _createdAt }
        limit: 6
        filter: { name: { regex: "/^(?!.*Portfolio$|^Portfolio)/i" } }
      ) {
        nodes {
          name
          year
          description
          techStack
          githubProjectLink
          liveLink
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const projects = data.allSanityProject.nodes

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="ProjectsSection"
        id="projects-section"
        data-testid="projects-section"
      >
        <h3
          className="SectionHeader after:w-7 after:sm:w-[30vw]"
          aria-label="Latest Projects"
        >
          Latest Projects
        </h3>
        <ul>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <li key={`${project.githubProjectLink}`}>
                {/* Desktop */}
                <div className="Project--desktop">
                  {project.image && project.liveLink && (
                    <div className={isEven ? '' : 'absolute right-0'}>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`live link for ${project.name}`}
                        className="ImageLink"
                        data-testid={`project-link-${index}`}
                      >
                        {/* Project screenshots: 1470px x 900px */}
                        <GatsbyImage
                          image={project.image.asset?.gatsbyImageData}
                          alt=""
                          className="w-full h-full object-contain rounded-sm"
                          data-testid={`project-image-${index}`}
                        />
                        <div className="Overlay--desktop"></div>
                        <div className="Overlay2--desktop"></div>
                      </a>
                    </div>
                  )}
                  <div
                    className={`ProjectText ${
                      isEven ? '-right-10 text-right' : '-left-10 text-left'
                    }`}
                  >
                    <h4 className="ProjectName">
                      <a
                        href={String(project.liveLink)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`live link for ${project.name}`}
                        data-testid={`project-title-${index}`}
                      >
                        {project.name}
                      </a>
                    </h4>
                    <div className="ProjectDescription">
                      <p>{project.description}</p>
                    </div>
                    <div className="text-slate-2 text-sm font-fira-code mt-6">
                      <ul
                        className={`flex flex-wrap gap-x-4 gap-y-2 ${
                          isEven ? 'justify-end pl-32' : 'justify-start pr-32'
                        }`}
                      >
                        {project.techStack?.map((skill, skillIndex) => {
                          return (
                            <li
                              key={`${
                                project.githubProjectLink
                              }-${skill?.replace(
                                / /g,
                                ''
                              )}-${skillIndex}-desktop`}
                            >
                              {skill}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div
                      className={`flex gap-6 mt-6 text-lg ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div>
                        <a
                          href={String(project.githubProjectLink)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.name}`}
                          className="IconLink"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div>
                        <a
                          href={String(project.liveLink)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`live link for ${project.name}`}
                          className="IconLink"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile */}
                <div className="Project--mobile">
                  {project.image && (
                    // Project screenshots: 1470px x 900px
                    <GatsbyImage
                      className="rounded-sm absolute w-full h-full opacity-50"
                      alt=""
                      image={project.image.asset?.gatsbyImageData}
                    />
                  )}
                  <div className="Overlay--mobile"></div>
                  <div className="Overlay2--mobile"></div>
                  <div className="z-20 px-6 py-8 rounded-sm">
                    <h4 className="ProjectName">
                      <a
                        href={String(project.liveLink)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`live link for ${project.name}`}
                      >
                        {project.name}
                      </a>
                    </h4>
                    <div className=" text-sm text-slate-2 tracking-wide my-6">
                      <p>{project.description}</p>
                    </div>
                    <div className="text-slate-2 text-sm font-fira-code mb-6">
                      <ul className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.techStack?.map((skill, skillIndex) => {
                          return (
                            <li
                              key={`${
                                project.githubProjectLink
                              }-${skill?.replace(
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
                    <div className="flex gap-12 text-lg">
                      <div>
                        <a
                          href={String(project.githubProjectLink)}
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
                          href={String(project.liveLink)}
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
                </div>
              </li>
            )
          })}
        </ul>
        <div className="text-center mt-24">
          <h3 className="text-2xl font-bold mb-2">
            Want to see more of my work?
          </h3>
          <Link
            className="AccentFont UnderlineAnimationLink"
            to="/project-archive"
          >
            View the archive
          </Link>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default ProjectsSection
