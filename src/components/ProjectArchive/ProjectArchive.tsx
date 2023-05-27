import { PROJECTS } from '../../content/projects'
import './ProjectArchive.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ProjectArchive = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="ProjectArchive"
        id="project-archive"
        data-testid="project-archive"
      >
        <h1>Project Archive</h1>
        <h2 className="AccentFont">
          Educational and side projects I&apos;ve completed over the years
        </h2>
        <ul>
          {PROJECTS.map((project, index) => {
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
          })}
        </ul>
      </div>
    </AnimationOnScroll>
  )
}

export default ProjectArchive
