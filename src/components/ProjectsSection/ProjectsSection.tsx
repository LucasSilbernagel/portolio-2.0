import { GatsbyImage } from 'gatsby-plugin-image'
import { PROJECTS } from '../../content/projects'
import './ProjectsSection.css'
import { graphql, useStaticQuery } from 'gatsby'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = () => {
  const projectImageNames = PROJECTS.map((project) => project.imageFileName)

  const imageQuery = useStaticQuery(query)

  const projectImages = imageQuery.allImageSharp.nodes
    .filter((node: { original: { src: string } }) =>
      projectImageNames.includes(node.original.src.split('/')[2].split('-')[0])
    )
    .map((node: { gatsbyImageData: string; original: { src: string } }) => {
      return {
        gatsbyImageData: node.gatsbyImageData,
        imageName: node.original.src.split('/')[2].split('-')[0],
      }
    })

  return (
    <div className="ProjectsSection" id="projects-section">
      <h3 className="SectionHeader">Projects</h3>
      <ul>
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0
          return (
            <li key={project.github} className="mb-24 relative">
              <div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`live link for ${project.name}`}
                  className="ImageLink"
                >
                  <GatsbyImage
                    image={
                      projectImages.filter(
                        (projectImage: { imageName: string }) =>
                          projectImage.imageName === project.imageFileName
                      )[0].gatsbyImageData
                    }
                    alt=""
                    className="w-full h-full object-contain rounded-sm"
                  />
                  <div className="Overlay"></div>
                  <div className="Overlay2"></div>
                </a>
              </div>
              <div className="ProjectText">
                <h4 className="ProjectName">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`live link for ${project.name}`}
                  >
                    {project.name}
                  </a>
                </h4>
                <div className="ProjectDescription">
                  <p>{project.description}</p>
                </div>
                <div className="text-slate-2 text-sm font-fira-code mt-6">
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-end pl-32">
                    {project.techStack.map((skill) => {
                      return <li key={index}>{skill}</li>
                    })}
                  </ul>
                </div>
                <div className="flex justify-end gap-6 mt-6 text-lg">
                  <div>
                    <a
                      href={project.github}
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
                      href={project.liveLink}
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const query = graphql`
  query Images {
    allImageSharp {
      nodes {
        gatsbyImageData
        original {
          src
        }
      }
    }
  }
`

export default ProjectsSection
