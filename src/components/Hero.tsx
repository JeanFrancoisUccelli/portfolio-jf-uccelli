import { profile, contact } from '../data/content'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow reveal">
            <span className="hero__dot" /> Disponible — {contact.mobility}
          </p>

          <h1 className="hero__title reveal reveal-delay-1">
            <span className="hero__first">{profile.firstName}</span>
            <span className="hero__last">{profile.lastName}</span>
          </h1>

          <p className="hero__role reveal reveal-delay-2">
            <em>{profile.title}</em>
          </p>

          <p className="hero__tagline reveal reveal-delay-3">{profile.tagline}</p>

          <div className="hero__actions reveal reveal-delay-4">
            <a href="#experiences" className="btn btn--primary">
              Découvrir mon parcours
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Me contacter
            </a>
          </div>
        </div>

        <aside className="hero__media reveal reveal-delay-2">
          <div className="hero__photo">
            <div className="hero__photo-frame">
              <img
                className="hero__photo-img"
                src="/photo.jpg"
                alt={`${profile.firstName} ${profile.lastName}`}
              />
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Salesforce ◇ Sitetracker ◇ HubSpot ◇ Lightning Web Components ◇ Apex ◇ SOQL ◇ ArcGIS ◇ React ◇ TypeScript ◇ Conduite du changement ◇
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
