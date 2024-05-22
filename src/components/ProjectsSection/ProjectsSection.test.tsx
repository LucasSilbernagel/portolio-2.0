import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'
import * as Gatsby from 'gatsby'
import { MOCK_PROJECTS_QUERY } from './mockProjectsQuery'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)

describe('ProjectsSection', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => MOCK_PROJECTS_QUERY)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<ProjectsSection />)
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByText('Latest Projects')).toBeInTheDocument()
    MOCK_PROJECTS_QUERY.allSanityProject.nodes.forEach((project, index) => {
      expect(screen.getByTestId(`project-link-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-link-${index}`)).toHaveAttribute(
        'href',
        project.liveLink
      )
      expect(screen.getByTestId(`project-image-${index}`)).toBeInTheDocument()
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
      ).toHaveAttribute('href', project.githubProjectLink)
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
