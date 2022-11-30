import { TECH_STACK } from '../../content/skills'
import './TechStack.css'

const TechStack = () => {
  return (
    <div className="TechStack" id="tech-stack-section">
      <h3 className="SectionHeader">Tech Stack</h3>
      <ul className="SkillGrid">
        {TECH_STACK.map((skillset, sectionIndex) => {
          return (
            <li key={sectionIndex} className="flex flex-col items-center">
              <h4 className="font-fira-code text-accent-1 text-center mb-1">
                {skillset.section}
              </h4>
              <div className="SkillBox">
                <ul className="text-sm">
                  {skillset.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="Skill">
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
  )
}

export default TechStack
