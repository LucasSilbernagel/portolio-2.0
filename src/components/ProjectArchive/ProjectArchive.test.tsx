import { render, screen } from '@testing-library/react'
import ProjectArchive from './ProjectArchive'

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
    expect(screen.getAllByTestId('archive-project').length).toEqual(4)
  })
})
