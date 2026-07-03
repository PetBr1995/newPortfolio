import { GitHubIcon, LinkedInIcon, WhatsAppIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <span className="stat-led">
            <i /> PETERSON.OS · © 2026 PETERSON BRITO DE ALBUQUERQUE
          </span>
          <div className="fg-links">
            <a href="https://github.com/PetBr1995" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><GitHubIcon size={18} /></a>
            <a href="https://linkedin.com/in/peterson-brito-048380149" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
            <a href="https://wa.me/5592981519333" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp"><WhatsAppIcon size={18} /></a>
            <a href="mailto:dev.petersonbrito@gmail.com" title="E-mail" aria-label="E-mail"><MailIcon size={18} /></a>
          </div>
          <span>SYSTEM STATUS · ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
