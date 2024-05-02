import { useEffect, useState } from 'react'
import { TECH_STACK } from '../../content/skills'
import './TechStack.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { isHTMLElement } from '../../utils/htmlHelpers'
import { slugifyString } from '../../utils/stringHelpers'

const TechStack = () => {
  const [maxBoxHeight, setMaxBoxHeight] = useState(0)

  useEffect(() => {
    // All of the skill section boxes should be the same height as the one with the most content.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const skillBoxHeights = TECH_STACK.map((_skill, index) => {
      const skillList = document.querySelectorAll(`.SkillBox ul`)[index]
      if (isHTMLElement(skillList)) {
        return skillList.offsetHeight
      } else {
        return 0
      }
    })
    setMaxBoxHeight(Math.max(...skillBoxHeights))
  }, [])

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
            As a graduate of a front-end web development bootcamp, I have a
            strong foundation in modern{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
              className="UnderlineLink"
            >
              HTML
            </a>{' '}
            and{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
              className="UnderlineLink"
            >
              CSS
            </a>
            .
          </li>
          <li>
            I try to stay up to date with the latest developments in{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              className="UnderlineLink"
            >
              JavaScript
            </a>
            , and I make my code type-safe with{' '}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              className="UnderlineLink"
            >
              TypeScript
            </a>
            .
          </li>
          <li>
            In terms of JavaScript libraries, I&apos;m very much a{' '}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="UnderlineLink"
            >
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
                  className="UnderlineLink"
                >
                  Gatsby
                </a>{' '}
                and{' '}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="UnderlineLink"
                >
                  Next.js
                </a>
                .
              </li>
            </ul>
          </li>
        </ul>
        {/* <ul className="SkillGrid">
          {TECH_STACK.map((skillset) => {
            return (
              <li
                key={slugifyString(skillset.section)}
                className="flex flex-col items-center"
              >
                <h4 className="font-fira-code text-accent-1 text-center mb-1">
                  {skillset.section}
                </h4>
                <div className="SkillBox">
                  <ul
                    className={`text-sm`}
                    style={{
                      height: maxBoxHeight > 0 ? `${maxBoxHeight}px` : 'unset',
                    }}
                  >
                    {skillset.skills.map((skill) => (
                      <li
                        key={`${slugifyString(
                          skillset.section
                        )}-${slugifyString(skill.subheader)}`}
                        className="Skill"
                      >
                        {skill.subheader}
                        {skill.subskills && (
                          <ul className="pl-6">
                            {skill.subskills.map((subskill) => {
                              return (
                                <li
                                  key={slugifyString(subskill)}
                                  className="Skill"
                                >
                                  {subskill}
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul> */}
      </div>
    </AnimationOnScroll>
  )
}

export default TechStack
