import { contact } from '../data/content'
import './Contact.css'

const items = [
  {
    label: 'Téléphone',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6 12 13 2 6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: contact.linkedin,
    href: contact.linkedinUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: contact.github,
    href: contact.githubUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <header className="section-header">
          <span className="section-number">05 ·</span>
          <h2 className="section-title">Contact</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__intro">
            <p className="contact__lead">
              Ouvert aux <em>opportunités</em> en administration applicative,
              CRM Salesforce/HubSpot ou projets hybrides admin + dev.
            </p>

            <p className="contact__location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                {contact.location}
                <br />
                <span className="contact__location-mobility">{contact.mobility}</span>
              </span>
            </p>
          </div>

          <ul className="contact__list">
            {items.map((item) => {
              const isExternal = item.href.startsWith('http')
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="contact__link"
                  >
                    <span className="contact__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="contact__text">
                      <span className="contact__label">{item.label}</span>
                      <span className="contact__value">{item.value}</span>
                    </span>
                    <span className="contact__arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
