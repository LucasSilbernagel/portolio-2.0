import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import Sitemap from '../../content/sitemap'

describe('Footer', () => {
  test('renders correctly', () => {
    // eslint-disable-next-line no-global-assign
    window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/contact',
      },
      writable: true,
    })
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeVisible()
    Sitemap.forEach((page) => {
      expect(screen.getByText(page.label)).toBeVisible()
      if (page.url !== '/contact') {
        expect(screen.getByText(page.label)).toHaveAttribute('href', page.url)
      }
    })
    expect(screen.getByTestId('social-links')).toBeVisible()
    expect(screen.getByText('Design inspired by')).toBeVisible()
    expect(screen.getByText('Brittany Chiang')).toBeVisible()
    expect(screen.getByText('Brittany Chiang')).toHaveAttribute(
      'href',
      'https://brittanychiang.com/'
    )
    expect(screen.getByText('Built by')).toBeVisible()
    expect(screen.getByText('Lucas Silbernagel')).toBeVisible()
    expect(screen.getByText('Lucas Silbernagel')).toHaveAttribute(
      'href',
      'https://github.com/LucasSilbernagel/portolio-2.0'
    )
  })
})
