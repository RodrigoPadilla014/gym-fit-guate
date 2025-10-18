import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Location from "@/components/Location";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Location />
      <ChatbotWidget />
    </main>
  );
};

export default Index;
