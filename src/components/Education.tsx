import { educations, certifications } from '../data/content'
import './Education.css'

export function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <header className="section-header">
          <span className="section-number">04 ·</span>
          <h2 className="section-title">Formation & Certifications</h2>
        </header>

        <div className="education__grid">
          <div className="education__formations">
            <h3 className="education__subtitle">Formation</h3>
            <ul className="education__list">
              {educations.map((edu) => (
                <li key={edu.diploma} className="education__item">
                  <h4 className="education__diploma">{edu.diploma}</h4>
                  <p className="education__institution">{edu.institution}</p>
                  {edu.detail && <p className="education__detail">{edu.detail}</p>}
                </li>
              ))}
            </ul>
          </div>

          <div className="education__certifications">
            <h3 className="education__subtitle">Certifications</h3>
            <ul className="education__list">
              {certifications.map((cert) => (
                <li key={cert.name} className="education__cert">
                  <span className="education__cert-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="education__cert-name">{cert.name}</h4>
                    <p className="education__cert-date">{cert.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
