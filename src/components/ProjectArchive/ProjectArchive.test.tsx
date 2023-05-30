import { render, screen, waitFor } from '@testing-library/react'
import ProjectArchive from './ProjectArchive'
import { PROJECTS } from '../../content/projects'

describe('ProjectArchive', () => {
  test('renders correctly', () => {
    render(<ProjectArchive />)
    expect(screen.getByTestId('project-archive')).toBeInTheDocument()
    expect(screen.getByText('Project Archive')).toBeInTheDocument()
    expect(
      screen.getByText(
        `Educational, freelance, and side projects I've completed over the years`
      )
    ).toBeInTheDocument()
    PROJECTS.forEach((project, index) => {
      waitFor(() => {
        expect(screen.getByTestId(`project-year-${index}`)).toBeInTheDocument()
        expect(screen.getByTestId(`project-year-${index}`)).toHaveTextContent(
          project.year
        )
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
        expect(screen.getByText(project.name)).toBeInTheDocument()
        expect(screen.getByText(project.name)).toHaveAttribute(
          'href',
          project.liveLink
        )
        expect(screen.getByText(project.description)).toBeInTheDocument()
        project.techStack.forEach((skill) => {
          expect(screen.getAllByText(skill)[0]).toBeInTheDocument()
        })
      })
    })
  })
})
