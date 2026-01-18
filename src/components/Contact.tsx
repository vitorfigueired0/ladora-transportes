import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const contacts = [
    { icon: Phone, label: 'Comercial', value: '(31) 9 7160-9089', link: 'tel:+5531971609089' },
    { icon: Mail, label: 'E-mail', value: 'comercialladora@transportadoraxadai.com.br', link: 'mailto:comercialladora@transportadoraxadai.com.br' },
    { icon: MapPin, label: 'Endereço', value: 'R. Campos Sales, 600 - Jardim Teresópolis, Betim MG', link: 'https://maps.google.com/?q=R.+Campos+Sales,+600+-+Jardim+Teresópolis,+Betim+MG' },
    { icon: Clock, label: 'Atendimento', value: 'Seg - Sex: 8h às 18h', link: null },
  ];

  const departments = [
    { name: 'Financeiro', phone: '(31) 9 7208-0575', email: 'gerencialadora@transportadoraxadai.com.br' },
    { name: 'Faturamento', phone: '(31) 9 9756-5899', email: 'faturamentoladora@transportadoraxadai.com.br' },
    { name: 'Logística', phone: '(31) 9 9749-9988', email: 'logisticaladora@transportadoraxadai.com.br' },
    { name: 'Expedição', phone: '(31) 9 9072-3588', email: 'expedicaoladora@transportadoraxadai.com.br' },
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Main Contact */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Entre em Contato</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mt-3 mb-6">
              Solicite sua <span className="text-gradient">cotação</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
              Entre em contato conosco e descubra como podemos otimizar sua logística com segurança e eficiência.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link || '#'}
                  className={`flex items-center gap-4 p-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 ${!contact.link && 'pointer-events-none'}`}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/60 text-sm">{contact.label}</span>
                    <p className="text-primary-foreground font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5531971609089" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-10 h-10 mr-2" />
                Fale pelo WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Right Side - Departments */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 lg:p-8">
            <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-6">Departamentos</h3>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/5 hover:border-accent/30 transition-all duration-300"
                >
                  <h4 className="font-heading font-bold text-primary-foreground mb-2">{dept.name}</h4>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href={`tel:${dept.phone.replace(/\D/g, '')}`} className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {dept.phone}
                    </a>
                    <a href={`mailto:${dept.email}`} className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 break-all">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      {dept.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
