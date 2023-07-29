import { render, screen, fireEvent } from '@testing-library/react'
import AboutSection from './AboutSection'
import ABOUT from '../../content/about'

describe('AboutSection', () => {
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    {
      ABOUT.forEach((paragraph, index) => {
        if (index < 2) {
          expect(screen.getByText(paragraph)).toBeInTheDocument()
        } else {
          expect(screen.queryByText(paragraph)).toBeNull()
        }
      })
    }
    expect(screen.getByTestId('read-more-button')).toBeInTheDocument()
    expect(screen.getByTestId('read-more-button')).toHaveTextContent(
      'Read more'
    )
    fireEvent.click(screen.getByTestId('read-more-button'))
    {
      ABOUT.forEach((paragraph) => {
        expect(screen.getByText(paragraph)).toBeInTheDocument()
      })
    }
    expect(screen.getByTestId('read-more-button')).toBeInTheDocument()
    expect(screen.getByTestId('read-more-button')).toHaveTextContent(
      'Read less'
    )
    expect(screen.getByAltText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByAltText('Lucas Silbernagel')).toHaveAttribute(
      'src',
      '../../images/profile-photo.jpg'
    )
  })
})
