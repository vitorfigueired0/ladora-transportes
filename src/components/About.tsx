import { Target, Eye, Heart } from 'lucide-react';
import warehouseImg from '@/assets/warehouse.jpg';

const About = () => {
  const values = [
    { icon: Target, title: 'Missão', description: 'Garantir soluções logísticas eficientes, seguras e personalizadas, contribuindo para o crescimento dos nossos clientes através do transporte de cargas com excelência em todo o Brasil.' },
    { icon: Eye, title: 'Visão', description: 'Ser reconhecida pelos nossos clientes como referência em transporte de cargas, destacando-se pela qualidade dos serviços, inovação e confiança nas relações.' },
    { icon: Heart, title: 'Valores', description: 'Precificação justa, flexibilidade, comprometimento, segurança, inovação, transparência, ética e valorização das pessoas.' },
  ];

  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-custom-lg">
              <img
                src={warehouseImg}
                alt="Armazém Ladora Transportes"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Quem Somos</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Especialistas em <span className="text-gradient">logística</span> há anos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Localizada em Betim, MG, somos especialistas em transporte de cargas completas e fracionadas, 
              com atuação em todo território nacional. Com sólida experiência no setor logístico, 
              somos reconhecidos pela nossa eficiência, compromisso e segurança em cada entrega.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              {values.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-custom transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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

export default About;
