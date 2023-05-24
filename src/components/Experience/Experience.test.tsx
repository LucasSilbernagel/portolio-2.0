import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import { EXPERIENCE } from '../../content/experience'

describe('Experience', () => {
  test('renders correctly', () => {
    render(<Experience />)
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    EXPERIENCE.forEach((experience) => {
      expect(screen.getAllByText(experience.timeframe)[0]).toBeInTheDocument()
      expect(screen.getAllByText(experience.timeframe)[0]).toBeInTheDocument()
      expect(screen.getAllByText(experience.title)[0]).toBeInTheDocument()
      expect(screen.getAllByTestId(experience.website)[0]).toBeInTheDocument()
      expect(screen.getAllByTestId(experience.website)[0]).toHaveAttribute(
        'href',
        experience.website
      )
      expect(screen.getAllByTestId(experience.website)[0]).toHaveTextContent(
        experience.company
      )
      experience.accomplishments.forEach((accomplishment, index) => {
        expect(
          screen.getByTestId(
            `${accomplishment.replace(' ', '')}-${String(index)}`
          )
        ).toBeInTheDocument()
      })
    })
  })
})
