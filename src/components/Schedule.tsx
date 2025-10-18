import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const morningTimes = [
    { time: "6:00", slots: ["6:00", "6:00", "6:00", "6:00", "6:00", "7:00"] },
    { time: "7:00", slots: ["7:00", "7:00", "7:00", "7:00", "7:00", "8:00"] },
    { time: "8:00", slots: ["8:00", "8:00", "8:00", "8:00", "8:00", ""] },
  ];
  const afternoonTimes = [
    { time: "17:00", slots: ["17:00", "17:00", "17:00", "17:00", "17:00", ""] },
    { time: "18:00", slots: ["18:00", "18:00", "18:00", "18:00", "18:00", ""] },
  ];

  return (
    <section className="py-20 bg-secondary text-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              NUESTROS <span className="text-white">HORARIOS</span>
            </h2>
            <p className="text-lg text-primary/80">
              Entrenamientos al aire libre en Finca Colombia
            </p>
          </div>

          <div className="bg-primary/20 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-primary mb-8">
            {/* Days header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="text-center font-bold text-sm"></div>
              {days.map((day) => (
                <div key={day} className="text-center font-bold text-sm text-secondary">
                  {day}
                </div>
              ))}
            </div>

            {/* Morning schedule */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-secondary">Horario Matutino</h3>
              </div>
              {morningTimes.map((row, idx) => (
                <div key={idx} className="grid grid-cols-7 gap-2 mb-2">
                  <div className="text-center font-semibold text-sm flex items-center justify-center bg-primary/10 rounded-lg py-2 text-secondary">
                    {row.time}
                  </div>
                  {row.slots.map((slot, i) => (
                    <div
                      key={i}
                      className={`text-center text-sm flex items-center justify-center rounded-lg py-2 ${
                        slot
                          ? "bg-primary text-secondary font-bold cursor-pointer hover:scale-105 transition-transform"
                          : "bg-primary/10"
                      }`}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Afternoon schedule */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-secondary">Horario Vespertino</h3>
              </div>
              {afternoonTimes.map((row, idx) => (
                <div key={idx} className="grid grid-cols-7 gap-2 mb-2">
                  <div className="text-center font-semibold text-sm flex items-center justify-center bg-primary/10 rounded-lg py-2 text-secondary">
                    {row.time}
                  </div>
                  {row.slots.map((slot, i) => (
                    <div
                      key={i}
                      className={`text-center text-sm flex items-center justify-center rounded-lg py-2 ${
                        slot
                          ? "bg-primary text-secondary font-bold cursor-pointer hover:scale-105 transition-transform"
                          : "bg-primary/10"
                      }`}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-secondary font-bold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" />
              RESERVAR MI WOD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
