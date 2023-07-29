import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'
import { PROJECTS } from '../../content/projects'

const mockImageData = 'mocked-image-data'

const mockProjects = PROJECTS.filter(
  (project) => !project.name.toLowerCase().includes('portfolio')
).slice(0, 6)

jest.mock('gatsby', () => {
  const originalModule = jest.requireActual('gatsby')
  return {
    ...originalModule,
    graphql: jest.fn(),
    useStaticQuery: jest
      .spyOn(originalModule, 'useStaticQuery')
      .mockImplementation(() => ({
        allFile: {
          nodes: mockProjects.map((project) => {
            return {
              relativePath: project.imageFileName,
              childImageSharp: {
                gatsbyImageData: mockImageData,
              },
            }
          }),
        },
      })),
  }
})

describe('ProjectsSection', () => {
  test('renders correctly', () => {
    render(<ProjectsSection />)
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByText('Latest Projects')).toBeInTheDocument()
    mockProjects.forEach((project, index) => {
      expect(screen.getByTestId(`project-link-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-link-${index}`)).toHaveAttribute(
        'href',
        project.liveLink
      )
      expect(screen.getByTestId(`project-image-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-image-${index}`)).toHaveAttribute(
        'image',
        'mocked-image-data'
      )
      expect(screen.getByTestId(`project-title-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-title-${index}`)).toHaveAttribute(
        'href',
        project.liveLink
      )
      expect(screen.getByTestId(`project-title-${index}`)).toHaveTextContent(
        project.name
      )
      expect(screen.getAllByText(project.description)[0]).toBeInTheDocument()
      project.techStack.forEach((skill) => {
        expect(screen.getAllByText(skill)[0]).toBeInTheDocument()
      })
      expect(
        screen.getByTestId(`github-project-link-${index}`)
      ).toBeInTheDocument()
      expect(
        screen.getByTestId(`github-project-link-${index}`)
      ).toHaveAttribute('href', project.github)
      expect(
        screen.getByTestId(`external-project-link-${index}`)
      ).toBeInTheDocument()
      expect(
        screen.getByTestId(`external-project-link-${index}`)
      ).toHaveAttribute('href', project.liveLink)
    })
    expect(screen.getByText('Want to see more of my work?')).toBeInTheDocument()
    expect(screen.getByText('View the archive')).toBeInTheDocument()
    expect(screen.getByText('View the archive')).toHaveAttribute(
      'href',
      '/project-archive'
    )
  })
})
