import { render, screen } from '@testing-library/react'
import SideBars from './SideBars'

describe('SideBars', () => {
  test('renders correctly', () => {
    render(<SideBars />)
    expect(screen.getByTestId('social-links-sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('email-sidebar')).toBeInTheDocument()
    expect(screen.getByText('hello@lucassilbernagel.com')).toBeInTheDocument()
  })
})
