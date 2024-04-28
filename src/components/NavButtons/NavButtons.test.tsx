import { render, screen } from '@testing-library/react'
import NavButtons from './NavButtons'

describe('NavButtons', () => {
  test('renders correctly', () => {
    render(<NavButtons setIsMenuOpening={jest.fn()} />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Tech Stack')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Say hello')).toBeInTheDocument()
    expect(screen.getByText('Say hello')).toHaveAttribute('href', '/contact')
  })
})
