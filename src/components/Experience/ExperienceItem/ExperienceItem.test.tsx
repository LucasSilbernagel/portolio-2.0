import { render, screen } from '@testing-library/react'
import ExperienceItem, { formatFullMonthYear } from './ExperienceItem'

const MOCK_EXPERIENCE = {
  _key: 'b6da52628359',
  title: 'Software Developer II',
  company: 'Xanadu',
  companyWebsite: 'https://xanadu.ai/',
  timeframe: {
    startDate: '2023-01' as unknown as Date,
    endDate: '2024-03' as unknown as Date,
  },
  accomplishments: [
    'Enhanced the Xanadu.ai website by implementing server-side rendering, image optimization, and several new pages. Leveraged Shopify APIs to seamlessly integrate the Xanadu merchandise shop into the website.',
    'Drove the front-end work for a refresh of the quantum hackathon software challenge dashboard.',
    'Migrated the PennyLane.ai website from a Python templating system to a modern development framework using Gatsby, React, TypeScript, and Tailwind.',
    'Led front-end development of the Generic Datasets project for visualizing and interacting with quantum datasets (scoping, requirements gathering, and implementation).',
  ],
}

describe('ExperienceItem', () => {
  test('renders correctly', () => {
    render(<ExperienceItem experience={MOCK_EXPERIENCE} />)
    expect(screen.getByTestId('experience-item')).toBeVisible()
    expect(
      screen.getAllByText(
        `${MOCK_EXPERIENCE?.timeframe?.startDate} — ${
          MOCK_EXPERIENCE?.timeframe?.endDate
            ? MOCK_EXPERIENCE.timeframe.endDate
            : 'present'
        }`
      )[0]
    ).toBeVisible()
    expect(
      screen.getAllByText(
        `${formatFullMonthYear(MOCK_EXPERIENCE?.timeframe?.startDate)} to ${
          MOCK_EXPERIENCE?.timeframe?.endDate
            ? formatFullMonthYear(MOCK_EXPERIENCE.timeframe.endDate)
            : 'present'
        }`
      )[0]
    ).toBeVisible()
    expect(screen.getByText(MOCK_EXPERIENCE.title)).toBeVisible()
    expect(screen.getByTestId(MOCK_EXPERIENCE.companyWebsite)).toBeVisible()
    expect(screen.getByTestId(MOCK_EXPERIENCE.companyWebsite)).toHaveAttribute(
      'href',
      MOCK_EXPERIENCE.companyWebsite
    )
    expect(
      screen.getByTestId(MOCK_EXPERIENCE.companyWebsite)
    ).toHaveTextContent(MOCK_EXPERIENCE.company)
    MOCK_EXPERIENCE.accomplishments.forEach((accomplishment, index) => {
      expect(
        screen.getByTestId(
          `${accomplishment.replace(' ', '')}-${String(index)}`
        )
      ).toBeVisible()
    })
  })
})
