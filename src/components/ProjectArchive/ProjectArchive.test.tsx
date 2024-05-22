import { render, screen } from '@testing-library/react'
import ProjectArchive from './ProjectArchive'
import * as Gatsby from 'gatsby'
import { MOCK_PROJECT_ARCHIVE_QUERY } from './mockProjectArchive'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)

describe('ProjectArchive', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => MOCK_PROJECT_ARCHIVE_QUERY)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', async () => {
    render(<ProjectArchive />)
    expect(screen.getByTestId('project-archive')).toBeInTheDocument()
    expect(screen.getByText('Project archive')).toBeInTheDocument()
    expect(
      screen.getByText(
        `Educational, freelance, and side projects I've completed over the years`
      )
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Filter projects by keyword')
    ).toBeInTheDocument()
    expect(screen.getByTestId('archive-filter-input')).toBeInTheDocument()
    expect(screen.queryByTestId('clear-search')).toBeNull()
    expect(screen.getAllByTestId('archive-project').length).toEqual(4)
    expect(screen.getByText('Super Simon')).toBeInTheDocument()
  })
})
