import warehouseImg from '@/assets/warehouse.jpg';

const About = () => {
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

            <p className="text-muted-foreground text-lg leading-relaxed">
              Nosso propósito é garantir soluções logísticas eficientes, seguras e personalizadas, contribuindo para o
              crescimento dos clientes e entregando excelência em todo o Brasil. Buscamos ser referência no setor pela
              qualidade do serviço, inovação e confiança nas relações, sempre guiados por precificação justa,
              flexibilidade, comprometimento, transparência, ética e valorização das pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
