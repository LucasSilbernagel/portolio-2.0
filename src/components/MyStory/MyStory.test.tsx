import { render, screen } from '@testing-library/react'
import MyStory from './MyStory'
import * as Gatsby from 'gatsby'
import { MOCK_MY_STORY_QUERY } from './mockMyStoryQuery'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)

describe('MyStory', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => MOCK_MY_STORY_QUERY)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<MyStory />)
    expect(screen.getByTestId('my-story')).toBeVisible()
    expect(screen.getByText('My story')).toBeVisible()
    expect(
      screen.getByText(
        MOCK_MY_STORY_QUERY.sanityMyStory._rawAboutMe[0].children[0].text
      )
    ).toBeVisible()
    expect(
      screen.getByText(
        'I’m always happy to make more connections, so feel free to reach out!'
      )
    ).toBeVisible()
    expect(screen.getByText('Say hello')).toHaveAttribute('href', '/contact')
  })
})
