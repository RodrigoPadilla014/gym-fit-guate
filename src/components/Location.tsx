import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              VISÍTANOS <span className="text-primary">HOY</span>
            </h2>
            <p className="text-lg text-gray-300">
              Estamos ubicados en el corazón de Guatemala
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">Ubicación</h3>
                    <p className="text-gray-300">
                      8va calle 15-44 Zona 6<br />
                      Guatemala City, Guatemala
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">Horario</h3>
                    <p className="text-gray-300">
                      Lunes a Viernes: 5:00 AM - 10:00 PM<br />
                      Sábados: 6:00 AM - 8:00 PM<br />
                      Domingos: 7:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">Contacto</h3>
                    <p className="text-gray-300">
                      ¿Preguntas? Llámanos o visítanos<br />
                      Estamos aquí para ayudarte
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-glow text-secondary font-bold text-lg py-6 shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all"
              >
                PROGRAMA TU VISITA
              </Button>
            </div>
            
            {/* Map placeholder */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-primary/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.845767956!2d-90.52!3d14.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzEyLjAiTiA5MMKwMzEnMTIuMCJX!5e0!3m2!1sen!2sgt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
