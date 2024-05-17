import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar', () => {
  test('renders correctly with the menu closed', () => {
    render(
      <NavBar
        isMenuOpening={false}
        setIsMenuOpening={jest.fn()}
        isMenuOpen={false}
        windowWidth={350}
      />
    )
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[575px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('invisible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeInTheDocument()
  })

  test('renders correctly with the menu open', () => {
    render(
      <NavBar
        isMenuOpening={false}
        setIsMenuOpening={jest.fn()}
        isMenuOpen={true}
        windowWidth={350}
      />
    )
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[575px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('visible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeInTheDocument()
  })
})
