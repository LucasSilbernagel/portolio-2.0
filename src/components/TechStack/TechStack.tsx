import './TechStack.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const TechStack = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="TechStack"
        id="tech-stack-section"
        data-testid="tech-stack-section"
      >
        <h3 className="SectionHeader">Tech Stack</h3>
        <ul className="SkillList">
          <li>
            As a graduate of a web development bootcamp, I have a strong
            foundation in modern{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </a>{' '}
            and{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              CSS
            </a>
            .
          </li>
          <li>
            I follow industry newsletters to stay at the forefront of modern{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript
            </a>
            , and I make my code type-safe with{' '}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              TypeScript
            </a>
            .
          </li>
          <li>
            When it comes to JavaScript libraries, I&apos;m very much a{' '}
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              React
            </a>{' '}
            developer.
            <ul>
              <li>
                React frameworks I&apos;ve worked with include{' '}
                <a
                  href="https://www.gatsbyjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gatsby
                </a>{' '}
                and{' '}
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  Next.js
                </a>
                .
              </li>
              <li>
                I manage React state with APIs like{' '}
                <a
                  href="https://react.dev/learn/passing-data-deeply-with-context"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Context
                </a>{' '}
                and libraries like{' '}
                <a
                  href="https://www.apollographql.com/docs/react/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apollo Client
                </a>
                ,{' '}
                <a
                  href="https://recoiljs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Recoil.js
                </a>
                , and{' '}
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Redux
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            I enjoy building user interfaces with CSS frameworks like{' '}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              Tailwind CSS{' '}
            </a>
            and component libraries like{' '}
            <a href="https://mui.com/" target="_blank" rel="noreferrer">
              MUI
            </a>
            .
          </li>
          <li>
            I&apos;m comfortable working with data from both{' '}
            <a
              href="https://en.wikipedia.org/wiki/REST"
              target="_blank"
              rel="noreferrer"
            >
              REST{' '}
            </a>
            and{' '}
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              GraphQL
            </a>{' '}
            APIs.
          </li>
          <li>
            While I specialize in front-end development, I&apos;ve built
            full-stack applications using technologies like{' '}
            <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
              Node.js{' '}
            </a>
            ,{' '}
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              Express
            </a>
            ,{' '}
            <a
              href="https://www.apollographql.com/docs/apollo-server/"
              target="_blank"
              rel="noreferrer"
            >
              Apollo Server
            </a>
            ,{' '}
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              MongoDB
            </a>
            , and{' '}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Firebase
            </a>
            .
          </li>
          <li>
            I have experience organizing and managing web content using{' '}
            <a href="https://www.sanity.io/" target="_blank" rel="noreferrer">
              Sanity
            </a>
            ,{' '}
            <a href="https://strapi.io/" target="_blank" rel="noreferrer">
              Strapi
            </a>
            ,{' '}
            <a
              href="https://www.shopify.com/ca"
              target="_blank"
              rel="noreferrer"
            >
              Shopify
            </a>
            , and{' '}
            <a href="https://wordpress.com/" target="_blank" rel="noreferrer">
              WordPress
            </a>
            .
          </li>
          <li>
            My preferred software testing frameworks include{' '}
            <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
              Jest{' '}
            </a>
            ,{' '}
            <a
              href="https://testing-library.com/docs/react-testing-library/intro/"
              target="_blank"
              rel="noreferrer"
            >
              React Testing Library
            </a>
            , and{' '}
            <a href="https://playwright.dev/" target="_blank" rel="noreferrer">
              Playwright
            </a>
            .
          </li>
        </ul>
      </div>
    </AnimationOnScroll>
  )
}

export default TechStack
