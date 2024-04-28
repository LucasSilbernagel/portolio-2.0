import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders correctly on the homepage', () => {
    render(<Header isHomePage={true} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByText('Software Developer')).toBeInTheDocument()
    expect(screen.getByTestId('hero-contact-link')).toBeInTheDocument()
    expect(screen.getByTestId('hero-contact-link')).toHaveTextContent(
      'Say hello'
    )
    expect(screen.getByTestId('hero-contact-link')).toHaveAttribute(
      'href',
      'mailto:hello@lucassilbernagel.com'
    )
    expect(screen.getByTestId('hero-image')).toBeInTheDocument()
  })

  test('renders correctly on a page other than the homepage', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.queryByText('Lucas Silbernagel')).toBeNull()
    expect(screen.queryByText('Software Developer')).toBeNull()
    expect(screen.queryByTestId('hero-contact-link')).toBeNull()
    expect(screen.queryByTestId('hero-image')).toBeNull()
  })
})
