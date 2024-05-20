import { Link, graphql, useStaticQuery } from 'gatsby'
import './TechStack.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { TechStackQuery } from '../../../graphql-types'
import { PortableText } from '@portabletext/react'

const TechStack = () => {
  const data: TechStackQuery = useStaticQuery(graphql`
    query TechStack {
      sanityHomepage {
        _rawTechStack
      }
    }
  `)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="TechStack"
        id="tech-stack-section"
        data-testid="tech-stack-section"
      >
        <h3 className="SectionHeader" aria-label="Tech Stack">
          Tech Stack
        </h3>
        <div className="SkillList">
          <PortableText
            value={data.sanityHomepage?._rawTechStack}
            components={{
              marks: {
                link: ({ value, children }) => {
                  const { href } = value
                  return href.includes('http') ? (
                    <a target="_blank" rel="noopener noreferrer" href={href}>
                      {children}
                    </a>
                  ) : (
                    <Link to={href}>{children}</Link>
                  )
                },
              },
            }}
          />
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default TechStack
