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
    expect(screen.getByTestId('nav-bar')).toBeVisible()
    expect(screen.getByTestId('icon-button')).toBeVisible()
    expect(screen.getByTestId('mobile-menu-button')).toBeVisible()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeVisible()
    expect(screen.getByTestId('mobile-menu')).toBeVisible()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[575px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('invisible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeVisible()
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
    expect(screen.getByTestId('nav-bar')).toBeVisible()
    expect(screen.getByTestId('icon-button')).toBeVisible()
    expect(screen.getByTestId('mobile-menu-button')).toBeVisible()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeVisible()
    expect(screen.getByTestId('mobile-menu')).toBeVisible()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[575px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('visible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeVisible()
  })
})
