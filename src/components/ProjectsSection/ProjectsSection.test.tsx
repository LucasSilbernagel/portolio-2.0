import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'
import { PROJECTS } from '../../content/projects'

describe('ProjectsSection', () => {
  test('renders correctly', () => {
    render(<ProjectsSection />)
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByText('Latest Projects')).toBeInTheDocument()
    PROJECTS.forEach((project, index) => {
      expect(screen.getByTestId(`project-link-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-link-${index}`)).toHaveAttribute(
        project.liveLink
      )
    })
  })
})
