import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeVisible()
    expect(screen.getByText('About Me')).toBeVisible()
    expect(screen.getByTestId('about-text')).toBeVisible()
    expect(screen.getByText('Read my story')).toHaveAttribute(
      'href',
      '/my-story'
    )
    expect(screen.getByAltText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByAltText('Lucas Silbernagel')).toHaveAttribute(
      'src',
      '../../images/profile-photo.jpg'
    )
  })
})
