import { Package, Truck, Warehouse, MapPinned, Box } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Carga Fracionada',
      description: 'Transporte de volumes menores com consolidação de cargas para otimização de custos e prazos.',
    },
    {
      icon: Truck,
      title: 'Carga Completa',
      description: 'Transporte dedicado para cargas que ocupam todo o veículo, garantindo agilidade e segurança.',
    },
    {
      icon: Warehouse,
      title: 'Armazenagem',
      description: 'Estrutura de armazenagem monitorada 24h com controle de entrada e saída.',
    },
    {
      icon: MapPinned,
      title: 'Distribuição',
      description: 'Roteirização otimizada para entregas em todo o território nacional com menor custo.',
    },
    {
      icon: Box,
      title: 'Toyota (Just in Time)',
      description: 'Especialistas em serviços para grandes indústrias com entregas programadas.',
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Nossos Serviços</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mt-3 mb-6">
            Soluções completas em <span className="text-gradient">logística</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Oferecemos uma gama completa de serviços logísticos para atender às necessidades da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">{service.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
