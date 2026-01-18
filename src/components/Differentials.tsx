import { Shield, Clock, Users, Route, MapPin, Handshake } from 'lucide-react';
import brazilRoutes from '@/assets/brazil-routes.jpg';

const Differentials = () => {
  const differentials = [
    { icon: Shield, title: 'Frota Moderna e Monitorada 24h', description: 'Veículos novos com rastreamento em tempo real.' },
    { icon: Users, title: 'Equipe Altamente Capacitada', description: 'Profissionais experientes no setor logístico.' },
    { icon: Clock, title: 'Armazenagem Monitorada', description: 'Estrutura segura com controle 24 horas.' },
    { icon: Handshake, title: 'Transparência nas Relações', description: 'Relacionamento de confiança com nossos clientes.' },
    { icon: Route, title: 'Roteirização Otimizada', description: 'Menor custo com melhor prazo de entrega.' },
    { icon: MapPin, title: 'Cobertura Nacional', description: 'Carreta e caminhão saindo de MG toda semana.' },
  ];

  return (
    <section id="diferenciais" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Por que nos escolher</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Nossos <span className="text-gradient">diferenciais</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Atendimento em todo território nacional com frota à disposição para coleta e entrega com agilidade e segurança.
            </p>

            {/* Differentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-custom transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <item.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-custom-lg bg-navy p-8">
              <img
                src={brazilRoutes}
                alt="Mapa de Rotas Brasil"
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">Atendimento Nacional</h3>
                <p className="text-primary-foreground/70">Principais polos logísticos do Brasil</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
