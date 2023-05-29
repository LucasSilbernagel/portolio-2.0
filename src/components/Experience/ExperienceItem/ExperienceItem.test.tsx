import { render, screen } from '@testing-library/react'
import ExperienceItem from './ExperienceItem'
import { EXPERIENCE } from '../../../content/experience'

describe('ExperienceItem', () => {
  const experience = EXPERIENCE[0]
  test('renders correctly', () => {
    render(<ExperienceItem experience={experience} />)
    expect(screen.getByTestId('experience-item')).toBeInTheDocument()
    expect(screen.getAllByText(experience.timeframe)[0]).toBeInTheDocument()
    expect(screen.getAllByText(experience.timeframeLong)[0]).toBeInTheDocument()
    expect(screen.getByText(experience.title)).toBeInTheDocument()
    expect(screen.getByTestId(experience.website)).toBeInTheDocument()
    expect(screen.getByTestId(experience.website)).toHaveAttribute(
      'href',
      experience.website
    )
    expect(screen.getByTestId(experience.website)).toHaveTextContent(
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
