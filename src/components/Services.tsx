import { Dumbbell, Bike, Users, Heart, Award, Music } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Clases Grupales e Individuales",
    description: "Entrena con nuestros expertos en sesiones personalizadas o únete a nuestras energéticas clases grupales"
  },
  {
    icon: Bike,
    title: "Indoor Cycling",
    description: "Experimenta el poder del ciclismo indoor con clases diseñadas para todos los niveles"
  },
  {
    icon: Dumbbell,
    title: "Entrenamiento Funcional",
    description: "Mejora tu fuerza, resistencia y flexibilidad con nuestros programas de entrenamiento funcional"
  },
  {
    icon: Heart,
    title: "100+ Máquinas de Cardio",
    description: "El área de cardio más completa de Guatemala con tecnología de última generación"
  },
  {
    icon: Award,
    title: "Taekwondo",
    description: "Clases de Taekwondo para adultos y niños con instructores certificados"
  },
  {
    icon: Music,
    title: "Ballet y Más",
    description: "Amplia variedad de clases especializadas incluyendo ballet, zumba, yoga y mucho más"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
            NUESTROS <span className="text-primary">SERVICIOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para alcanzar tus objetivos fitness en un solo lugar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
