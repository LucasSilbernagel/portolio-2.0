import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(
      screen.getByText(
        `Hi, I'm Lucas! I'm a front-end developer based in Toronto, Canada. I specialize in transforming designs, prototypes, and ideas into delightful user interfaces.`
      )
    ).toBeInTheDocument()
  })
})
