import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-secondary">
              VISÍTANOS <span className="text-primary">HOY</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Entrenamiento al aire libre en Antigua Guatemala
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 hover:border-primary transition-all shadow-lg hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-secondary">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Finca Colombia<br />
                      Antigua Guatemala
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 hover:border-primary transition-all shadow-lg hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-secondary">Contacto</h3>
                    <p className="text-muted-foreground">
                      Contáctanos para más información<br />
                      sobre nuestras clases al aire libre
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 hover:border-primary transition-all shadow-lg hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-secondary">Horario</h3>
                    <p className="text-muted-foreground">
                      Ver horarios disponibles en<br />
                      la sección de reservas
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg py-6 shadow-glow hover:scale-105 transition-all"
              >
                PROGRAMA TU VISITA
              </Button>
            </div>
            
            {/* Map */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d-90.732!3d14.560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzM2LjAiTiA5MMKwNDMnNTUuMiJX!5e0!3m2!1sen!2sgt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
