import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import ladoraLogo from '@/assets/ladora-logo.png';

const Footer = () => {
  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={ladoraLogo} alt="Ladora Transportes" className="h-10 w-auto" />
              <div>
                <span className="font-heading font-bold text-xl text-primary-foreground">LADORA</span>
                <span className="block text-xs text-primary-foreground/70 tracking-wider">TRANSPORTES</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-4">
              Muito além do transporte, entregamos confiança.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <Phone className="w-4 h-4" />
              (31) 9 7160-9089
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mt-1">
              <Mail className="w-4 h-4" />
              ladoratransportes@gmail.com
            </div>
            <div className="flex items-center gap-4 text-primary-foreground/70 mt-4">
              <a
                href="https://wa.me/5531971609089"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Ladora Transportes"
                className="hover:text-accent transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ladoratransportes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Ladora Transportes"
                className="hover:text-accent transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ladora Transportes. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Betim, MG - Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
