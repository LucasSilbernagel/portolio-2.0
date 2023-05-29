import { render, screen, fireEvent } from '@testing-library/react'
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
    expect(
      screen.getByText(
        `I've been working in the industry since 2020, when I graduated from web development bootcamp. The logical side of my brain loves solving tricky coding problems and software architecture challenges, while the creative side of my brain loves converting designs into beautiful and functional web pages that people use every day. I'm also passionate about making the web a more accessible place, one page at a time.`
      )
    ).toBeInTheDocument()
    expect(
      screen.queryByText(
        `In university I studied anthropology and French. I planned to work in academia, but after completing a Master's degree in anthropology I realized that this was not a viable option due to the overly competitive job market and the increasing trend of hiring contract faculty instead of full-time positions. I worked briefly in a sales role at a tech company, and then for over three years in a customer service role at a call center.`
      )
    ).toBeNull()
    expect(
      screen.queryByText(
        `While working at the call center, I enrolled in a part-time introduction to web development course in October 2019. I had dabbled in building websites in the past, and I wanted to see if a career change into web development was the right move for me. I really enjoyed the course, so after much deliberation I quit my job to begin full-time bootcamp in February 2020.`
      )
    ).toBeNull()
    expect(
      screen.queryByText(
        `Finding a job after bootcamp was challenging, since I graduated shortly after the start of the COVID-19 pandemic. However, within two months I managed to land my first position as a front-end developer, and I've been working in the industry ever since!`
      )
    ).toBeNull()
    expect(screen.getByTestId('read-more-button')).toBeInTheDocument()
    expect(screen.getByTestId('read-more-button')).toHaveTextContent(
      'Read more'
    )
    fireEvent.click(screen.getByTestId('read-more-button'))
    expect(
      screen.getByText(
        `In university I studied anthropology and French. I planned to work in academia, but after completing a Master's degree in anthropology I realized that this was not a viable option due to the overly competitive job market and the increasing trend of hiring contract faculty instead of full-time positions. I worked briefly in a sales role at a tech company, and then for over three years in a customer service role at a call center.`
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `While working at the call center, I enrolled in a part-time introduction to web development course in October 2019. I had dabbled in building websites in the past, and I wanted to see if a career change into web development was the right move for me. I really enjoyed the course, so after much deliberation I quit my job to begin full-time bootcamp in February 2020.`
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `Finding a job after bootcamp was challenging, since I graduated shortly after the start of the COVID-19 pandemic. However, within two months I managed to land my first position as a front-end developer, and I've been working in the industry ever since!`
      )
    ).toBeInTheDocument()
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
