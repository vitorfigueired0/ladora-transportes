import { FaWhatsapp } from 'react-icons/fa6';

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5531971609089"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    title="Falar no WhatsApp"
    className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-accent transition-transform duration-200 hover:scale-105 hover:bg-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  >
    <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
  </a>
);

export default WhatsAppFloat;
