import { Button } from "@/components/ui/button";
import logo from "@/assets/upilates-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="U Pilates Logo" 
              className="w-48 h-48 rounded-full shadow-2xl border-4 border-white"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            TRANSFORMA TU <span className="text-secondary">CUERPO</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Descubre el poder del Pilates. Fortalece, estira y conecta con tu cuerpo.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-2xl p-4 mb-8 inline-block">
            <p className="text-2xl font-bold text-white">
              ✨ INSCRIPCIÓN <span className="text-secondary">GRATIS</span> ✨
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-secondary text-primary font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-glow transition-all hover:scale-105"
            >
              VER PAQUETES
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 transition-all hover:scale-105"
            >
              RESERVAR CLASE
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
