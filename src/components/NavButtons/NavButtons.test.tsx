import { render, screen } from '@testing-library/react'
import NavButtons from './NavButtons'

describe('NavButtons', () => {
  test('renders correctly on the Contact page', () => {
    // eslint-disable-next-line no-global-assign
    window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/contact',
      },
      writable: true,
    })
    render(<NavButtons setIsMenuOpening={jest.fn()} />)
    expect(screen.getByText('About')).toBeVisible()
    expect(screen.getByText('Tech Stack')).toBeVisible()
    expect(screen.getByText('Experience')).toBeVisible()
    expect(screen.getByText('Projects')).toBeVisible()
    expect(screen.queryByText('Say hello')).toBeNull()
    expect(screen.getByText('Homepage')).toBeVisible()
    expect(screen.getByText('Homepage')).toHaveAttribute('href', '/')
  })

  test('renders correctly on a page other than the Contact page', () => {
    // eslint-disable-next-line no-global-assign
    window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/',
      },
      writable: true,
    })
    render(<NavButtons setIsMenuOpening={jest.fn()} />)
    expect(screen.getByText('About')).toBeVisible()
    expect(screen.getByText('Tech Stack')).toBeVisible()
    expect(screen.getByText('Experience')).toBeVisible()
    expect(screen.getByText('Projects')).toBeVisible()
    expect(screen.queryByText('Homepage')).toBeNull()
    expect(screen.getByText('Say hello')).toBeVisible()
    expect(screen.getByText('Say hello')).toHaveAttribute('href', '/contact')
  })
})
