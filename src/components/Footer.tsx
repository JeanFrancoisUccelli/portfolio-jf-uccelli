import { profile } from '../data/content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          <span className="site-footer__sep"> · </span>
          <span className="site-footer__role">{profile.title}</span>
        </p>

        <p className="site-footer__meta">
          Conçu avec <em>Vite</em>, <em>React</em> &amp; <em>TypeScript</em>
        </p>
      </div>
    </footer>
  )
}
