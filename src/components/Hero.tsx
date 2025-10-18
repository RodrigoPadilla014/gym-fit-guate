import logo from "@/assets/century-fitness-logo.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-black">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Century Fitness Center Logo" 
              className="h-48 w-auto object-contain drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tight">
            TRANSFORMA TU CUERPO,
            <br />
            <span className="text-white">TRANSFORMA TU VIDA</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            El gimnasio más completo de Guatemala con más de 100 máquinas, clases grupales y entrenamiento personalizado
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-secondary font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all"
            >
              ÚNETE AHORA
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-bold text-lg px-8 py-6 transition-all"
            >
              VER PLANES
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
