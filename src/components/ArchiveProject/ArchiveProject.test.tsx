import { render, screen } from '@testing-library/react'
import ArchiveProject from './ArchiveProject'
import { PROJECTS } from '../../content/projects'

describe('ArchiveProject', () => {
  const project = PROJECTS[0]
  const index = 0
  test('renders correctly', () => {
    render(<ArchiveProject project={project} index={index} />)
    expect(screen.getByTestId('archive-project')).toBeInTheDocument()
    expect(screen.getByTestId(`project-year-${index}`)).toBeInTheDocument()
    expect(screen.getByTestId(`project-year-${index}`)).toHaveTextContent(
      project.year
    )
    expect(
      screen.getByTestId(`github-project-link-${index}`)
    ).toBeInTheDocument()
    expect(screen.getByTestId(`github-project-link-${index}`)).toHaveAttribute(
      'href',
      project.github
    )
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
