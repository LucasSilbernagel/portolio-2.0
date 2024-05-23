import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './ArchiveProject.css'

export interface IProject {
  name?: string | null
  year?: number | null
  description?: string | null
  techStack?: (string | null)[] | null
  githubProjectLink?: string | null
  liveLink?: string | null
}

interface IArchiveProjectProps {
  project: IProject
  index: number
}

const ArchiveProject = (props: IArchiveProjectProps) => {
  const { project, index } = props
  return (
    <li className="ArchiveProject" data-testid="archive-project">
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
        <h4>
          <a
            href={String(project.liveLink)}
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
            {project.techStack?.map((skill, skillIndex) => {
              return (
                <li
                  key={`${project.githubProjectLink}-${skill?.replace(
                    / /g,
                    ''
                  )}-${skillIndex}`}
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

export default ArchiveProject
