import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders correctly on the homepage', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toBeVisible()
    expect(screen.getByTestId('nav-bar')).toBeVisible()
    expect(screen.getByText('Lucas Silbernagel')).toBeVisible()
    expect(screen.getByText('Software Developer')).toBeVisible()
    expect(screen.getByTestId('hero-contact-link')).toBeVisible()
    expect(screen.getByTestId('hero-contact-link')).toHaveTextContent(
      'Say hello'
    )
    expect(screen.getByTestId('hero-contact-link')).toHaveAttribute(
      'href',
      '/contact'
    )
    expect(screen.getByTestId('hero-image')).toBeVisible()
  })

  test('renders correctly on a page other than the homepage', () => {
    // eslint-disable-next-line no-global-assign
    window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/contact',
      },
      writable: true,
    })
    render(<Header />)
    expect(screen.getByTestId('header')).toBeVisible()
    expect(screen.getByTestId('nav-bar')).toBeVisible()
    expect(screen.queryByText('Lucas Silbernagel')).toBeNull()
    expect(screen.queryByText('Software Developer')).toBeNull()
    expect(screen.queryByTestId('hero-contact-link')).toBeNull()
    expect(screen.queryByTestId('hero-image')).toBeNull()
  })
})
