import { profile } from '../data/content'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <header className="section-header">
          <span className="section-number">01 ·</span>
          <h2 className="section-title">À propos</h2>
        </header>

        <div className="about__grid">
          <div className="about__lead">
            <p className="about__quote">
              Profil hybride <em>admin + dev</em>, gardien d'un écosystème CRM
              de 120 utilisateurs.
            </p>
          </div>

          <div className="about__body">
            <p>{profile.summary}</p>
            <ul className="about__stats">
              <li>
                <span className="about__stat-value">~5</span>
                <span className="about__stat-label">années d'expérience IT</span>
              </li>
              <li>
                <span className="about__stat-value">120</span>
                <span className="about__stat-label">utilisateurs Salesforce</span>
              </li>
              <li>
                <span className="about__stat-value">10+</span>
                <span className="about__stat-label">LWC & triggers Apex</span>
              </li>
              <li>
                <span className="about__stat-value">1</span>
                <span className="about__stat-label">certification Sitetracker</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
