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
    waitFor(() => {
      expect(screen.getAllByTestId('archive-projet').length).toEqual(
        PROJECTS.length
      )
    })
  })
})
