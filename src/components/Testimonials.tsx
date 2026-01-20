import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'A confiabilidade da Ladora faz toda a diferença para a nossa operação. Carga fracionada ou completa, o padrão de qualidade é sempre o mesmo.',
      company: 'Civil Master',
    },
    {
      quote: 'Um diferencial é o cuidado com os detalhes na hora do carregamento e descarregamento.',
      company: 'Terragreen',
    },
    {
      quote: 'A equipe é extremamente profissional. Estão sempre prontos para atender com agilidade e resolver qualquer imprevisto.',
      company: 'Barbosa Mello',
    },
    {
      quote: 'Super recomendo. Equipe muito bem treinada, transporte seguro e ótimo custo-benefício.',
      company: 'Alvorada Ambiental',
    },
    {
      quote: 'Estrutura organizada, segura e com ótimo controle de entrada e saída. Ganhamos agilidade e tranquilidade no nosso processo logístico.',
      company: 'Verdetec',
    },
  ];

  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container-custom mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Depoimentos</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group flex h-full flex-col p-6 lg:p-8 bg-card rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300 border border-border hover:border-accent/30 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic flex-1">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="font-heading font-bold text-foreground">{testimonial.company}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
