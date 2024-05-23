import { render, screen, fireEvent } from '@testing-library/react'
import Experience from './Experience'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    experience: [
      {
        _key: 'ff4a6c7338cf',
        title: 'Front-End Developer',
        company: 'Greenpeace Canada',
        companyWebsite: 'https://www.greenpeace.org/canada/en/',
        timeframe: {
          startDate: '2020-07',
          endDate: '2021-02',
        },
        accomplishments: [
          'Maintained and improved the Greenpeace Canada website using WordPress, HTML, CSS, and JavaScript.',
          "Developed petition pages, donation pages, and emails using Greenpeace Canada's advocacy tools.",
          'Managed relationships with external designers, developers, and internal end users.',
        ],
      },
      {
        _key: '9c512d8443d5',
        title: 'Front-End Developer',
        company: 'CarbonCure Technologies',
        companyWebsite: 'https://www.carboncure.com/',
        timeframe: {
          startDate: '2021-03',
          endDate: '2022-04',
        },
        accomplishments: [
          "Responsible for planning, building, testing, and improving CarbonCure's internal suite of software applications.",
          'Lead developer of two key projects built with React, TypeScript, and MUI incorporating map layers, tables, and other data visualizations.',
          'Published release notes and performed live and pre-recorded product demos for stakeholders.',
        ],
      },
      {
        _key: '1bd5858e5945',
        title: 'Front-End Developer',
        company: 'Xanadu',
        companyWebsite: 'https://xanadu.ai/',
        timeframe: {
          startDate: '2022-04',
          endDate: '2022-12',
        },
        accomplishments: [
          'Led a company-wide accessibility audit and advocated for compliance with web accessibility best practices.',
          'Co-created a reusable component library built with React, TypeScript, Tailwind, and Storybook.',
          'Developed key features of Xanadu’s quantum hackathon software with React, TypeScript, Tailwind, and GraphQL.',
        ],
      },
      {
        _key: 'b6da52628359',
        title: 'Software Developer II',
        company: 'Xanadu',
        companyWebsite: 'https://xanadu.ai/',
        timeframe: {
          startDate: '2023-01',
          endDate: '2024-03',
        },
        accomplishments: [
          'Enhanced the Xanadu.ai website by implementing server-side rendering, image optimization, and several new pages. Leveraged Shopify APIs to seamlessly integrate the Xanadu merchandise shop into the website.',
          'Drove the front-end work for a refresh of the quantum hackathon software challenge dashboard.',
          'Migrated the PennyLane.ai website from a Python templating system to a modern development framework using Gatsby, React, TypeScript, and Tailwind.',
          'Led front-end development of the Generic Datasets project for visualizing and interacting with quantum datasets (scoping, requirements gathering, and implementation).',
        ],
      },
      {
        _key: 'be8dfb9429d9',
        title: 'Software Developer',
        company: 'theScore',
        companyWebsite: 'https://www.scoremediaandgaming.com/',
        timeframe: {
          startDate: '2024-03',
          endDate: null,
        },
        accomplishments: [],
      },
    ],
  },
}

describe('Experience', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<Experience />)
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getAllByTestId('experience-item')).toHaveLength(3)
    expect(screen.getByTestId('read-more-button')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('read-more-button'))
    expect(screen.getAllByTestId('experience-item')).toHaveLength(
      mockUseStaticQuery.sanityHomepage.experience.length
    )
  })
})
