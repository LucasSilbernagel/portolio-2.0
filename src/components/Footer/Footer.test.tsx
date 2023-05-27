import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders correctly', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('social-links')).toBeInTheDocument()
    expect(screen.getByText('Design inspired by')).toBeInTheDocument()
    expect(screen.getByText('Brittany Chiang')).toBeInTheDocument()
    expect(screen.getByText('Brittany Chiang')).toHaveAttribute(
      'href',
      'https://brittanychiang.com/'
    )
    expect(screen.getByText('Built by')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toHaveAttribute(
      'href',
      'https://github.com/LucasSilbernagel/portolio-2.0'
    )
  })
})
