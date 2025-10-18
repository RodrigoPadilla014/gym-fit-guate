import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-glow text-white p-4 rounded-full shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-glow p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white">U Pilates</h3>
                  <p className="text-xs text-white/80">Asistente Virtual</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="h-80 p-4 bg-background overflow-y-auto">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex gap-3">
                <div className="bg-primary rounded-full p-2 h-8 w-8 flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">
                    ¡Hola! 👋 Bienvenido a U Pilates. ¿Cómo puedo ayudarte hoy?
                  </p>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="flex flex-col gap-2 pl-11">
                <button className="bg-card hover:bg-muted border border-border rounded-xl p-3 text-sm text-left transition-colors">
                  📋 Ver paquetes disponibles
                </button>
                <button className="bg-card hover:bg-muted border border-border rounded-xl p-3 text-sm text-left transition-colors">
                  📅 Reservar una clase
                </button>
                <button className="bg-card hover:bg-muted border border-border rounded-xl p-3 text-sm text-left transition-colors">
                  📍 ¿Cómo llegar?
                </button>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-muted/50">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-background border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <button 
                className="bg-primary hover:bg-primary-glow text-secondary px-4 py-2 rounded-xl font-bold transition-colors"
                disabled
              >
                Enviar
              </button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Chat demo - Próximamente disponible
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
