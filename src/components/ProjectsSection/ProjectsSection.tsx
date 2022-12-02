import { GatsbyImage } from 'gatsby-plugin-image'
import { PROJECTS } from '../../content/projects'
import './ProjectsSection.css'
import { graphql, useStaticQuery } from 'gatsby'

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
        {PROJECTS.map((project) => {
          return (
            <li key={project.github}>
              <div>
                <div className="w-[580px] h-[363px]">
                  <GatsbyImage
                    image={
                      projectImages.filter(
                        (projectImage: { imageName: string }) =>
                          projectImage.imageName === project.imageFileName
                      )[0].gatsbyImageData
                    }
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
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
