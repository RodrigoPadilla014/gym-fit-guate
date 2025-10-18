import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Packages />
      <Schedule />
      <Location />
      <ChatbotWidget />
    </main>
  );
};

export default Index;
