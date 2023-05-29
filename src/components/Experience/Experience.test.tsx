import { render, screen, fireEvent } from '@testing-library/react'
import Experience from './Experience'
import { EXPERIENCE } from '../../content/experience'

describe('Experience', () => {
  test('renders correctly', () => {
    render(<Experience />)
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getAllByTestId('experience-item')).toHaveLength(3)
    expect(screen.getByTestId('read-more-button')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('read-more-button'))
    expect(screen.getAllByTestId('experience-item')).toHaveLength(
      EXPERIENCE.length
    )
  })
})
