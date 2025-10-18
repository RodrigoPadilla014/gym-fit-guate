import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Packages = () => {
  const packages = [
    { name: "DROP-IN", price: "Q75", classes: "1 clase", popular: false },
    { name: "BÁSICO", price: "Q500", classes: "8 clases/mes", popular: false },
    { name: "ATLETA", price: "Q750", classes: "16 clases/mes", popular: true },
    { name: "BEAST", price: "Q900", classes: "Ilimitado", popular: false },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-secondary">
            NUESTROS <span className="text-primary">PLANES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entrena al aire libre en el único box de Antigua Guatemala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-6 border-2 transition-all hover:scale-105 hover:shadow-2xl ${
                pkg.popular
                  ? "border-primary shadow-glow"
                  : "border-border hover:border-primary"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-secondary px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{pkg.name}</h3>
                <div className="text-4xl font-black text-foreground mb-1">{pkg.price}</div>
                <p className="text-sm text-muted-foreground">{pkg.classes}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>WODs diarios</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Coaches certificados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Entrenamiento outdoor</span>
                </div>
              </div>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "bg-secondary hover:bg-secondary/90 text-primary"
                    : "bg-primary hover:bg-primary-glow text-secondary"
                } font-bold`}
              >
                EMPEZAR
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            🌋 Primer y único CrossFit al aire libre en Antigua Guatemala
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
