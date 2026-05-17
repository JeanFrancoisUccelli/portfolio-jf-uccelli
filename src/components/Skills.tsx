import { skillGroups, softSkills, languages } from '../data/content'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <header className="section-header">
          <span className="section-number">03 ·</span>
          <h2 className="section-title">Compétences</h2>
        </header>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3 className="skill-group__title">{group.title}</h3>
              <ul className="skill-group__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skill-group__bullet" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills__extra">
          <div className="skills__extra-block">
            <h3 className="skills__extra-title">Soft skills</h3>
            <ul className="skills__chips">
              {softSkills.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__extra-block">
            <h3 className="skills__extra-title">Langues</h3>
            <ul className="skills__languages">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span className="skills__lang-name">{lang.name}</span>
                  <span className="skills__lang-level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
