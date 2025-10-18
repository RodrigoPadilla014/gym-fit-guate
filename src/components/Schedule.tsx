import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const morningTimes = [
    { time: "6:30", slots: ["6:30", "6:30", "7:30", "6:30", "7:30", ""] },
    { time: "7:30", slots: ["7:30", "7:30", "8:30", "7:30", "", ""] },
    { time: "8:30", slots: ["8:30", "8:30", "", "8:30", "8:30", "8:00"] },
    { time: "9:00", slots: ["", "", "", "", "9:00", "9:00"] },
    { time: "10:00", slots: ["", "", "", "", "", "10:00"] },
  ];
  const afternoonTimes = [
    { time: "13:00", slots: ["", "", "", "13:00", "", ""] },
    { time: "16:00", slots: ["16:00", "16:00", "16:00", "16:00", "", ""] },
    { time: "17:30", slots: ["17:30", "17:30", "17:30", "17:30", "", ""] },
    { time: "19:00", slots: ["19:00", "", "", "", "", ""] },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ¡NUESTROS <span className="text-secondary">HORARIOS!</span>
            </h2>
            <p className="text-lg text-white/80">
              Reserva tu clase en el horario que mejor te convenga
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-white/20 mb-8">
            {/* Days header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="text-center font-bold text-sm"></div>
              {days.map((day) => (
                <div key={day} className="text-center font-bold text-sm">
                  {day}
                </div>
              ))}
            </div>

            {/* Morning schedule */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-lg">Horario Matutino</h3>
              </div>
              {morningTimes.map((row, idx) => (
                <div key={idx} className="grid grid-cols-7 gap-2 mb-2">
                  <div className="text-center font-semibold text-sm flex items-center justify-center bg-white/5 rounded-lg py-2">
                    {row.time}
                  </div>
                  {row.slots.map((slot, i) => (
                    <div
                      key={i}
                      className={`text-center text-sm flex items-center justify-center rounded-lg py-2 ${
                        slot
                          ? "bg-secondary text-primary font-bold cursor-pointer hover:scale-105 transition-transform"
                          : "bg-white/5"
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
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-lg">Horario Vespertino</h3>
              </div>
              {afternoonTimes.map((row, idx) => (
                <div key={idx} className="grid grid-cols-7 gap-2 mb-2">
                  <div className="text-center font-semibold text-sm flex items-center justify-center bg-white/5 rounded-lg py-2">
                    {row.time}
                  </div>
                  {row.slots.map((slot, i) => (
                    <div
                      key={i}
                      className={`text-center text-sm flex items-center justify-center rounded-lg py-2 ${
                        slot
                          ? "bg-secondary text-primary font-bold cursor-pointer hover:scale-105 transition-transform"
                          : "bg-white/5"
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
              className="bg-secondary hover:bg-white text-primary font-bold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" />
              RESERVAR MI CLASE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
