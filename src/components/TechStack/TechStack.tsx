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
    const skillBoxHeights = TECH_STACK.map(() => {
      const skillList = document.querySelector(`.SkillBox ul`)
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
        <ul className="SkillGrid">
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
                        )}-${slugifyString(skill)}`}
                        className="Skill"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </AnimationOnScroll>
  )
}

export default TechStack
