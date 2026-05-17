import { itExperiences, previousExperiences, type Experience } from '../data/content'
import './Experiences.css'

function ExperienceCard({ exp, current }: { exp: Experience; current?: boolean }) {
  return (
    <article className={`exp ${current ? 'exp--current' : ''}`}>
      <div className="exp__period">
        <span className="exp__period-text">{exp.period}</span>
        {current && <span className="exp__badge">En poste</span>}
      </div>

      <div className="exp__body">
        <header className="exp__header">
          <h3 className="exp__company">
            {exp.company}
            <span className="exp__location"> — {exp.location}</span>
          </h3>
          <p className="exp__role">{exp.role}</p>
        </header>

        <ul className="exp__highlights">
          {exp.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        {exp.stack && (
          <p className="exp__stack">
            <span className="exp__stack-label">Stack :</span> {exp.stack}
          </p>
        )}
      </div>
    </article>
  )
}

export function Experiences() {
  return (
    <>
      <section id="experiences" className="section experiences">
        <div className="container">
          <header className="section-header">
            <span className="section-number">02 ·</span>
            <h2 className="section-title">Expériences IT</h2>
          </header>

          <div className="experiences__list">
            {itExperiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} current={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section experiences experiences--previous">
        <div className="container">
          <header className="section-header">
            <span className="section-number">02·b</span>
            <h2 className="section-title">Expériences antérieures</h2>
          </header>

          <div className="experiences__list">
            {previousExperiences.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
