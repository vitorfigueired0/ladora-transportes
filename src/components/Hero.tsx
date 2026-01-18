import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import heroTruck from '@/assets/hero-truck.jpg';

const Hero = () => {
  const stats = [
    { value: '24h', label: 'Monitoramento', icon: Clock },
    { value: '100%', label: 'Cobertura Nacional', icon: MapPin },
    { value: 'R$2.5M', label: 'Seguro por Carga', icon: Shield },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroTruck}
          alt="Caminhão Ladora Transportes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-medium text-sm">Betim, MG • Atuação Nacional</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight animate-fade-in-up">
            Muito além do transporte,{' '}
            <span className="text-gradient">entregamos confiança.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up animation-delay-200">
            Soluções logísticas eficientes, seguras e personalizadas para todo o Brasil. 
            Especialistas em cargas completas e fracionadas.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                Solicitar Cotação
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sobre">Conheça a Ladora</a>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 animate-fade-in-up animation-delay-600">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-primary-foreground/60 text-sm">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
