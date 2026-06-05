import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7FA] text-[#2A2024] lg:flex lg:h-screen lg:overflow-hidden">
      <Sidebar />
      <main className="paper-texture relative flex-1 overflow-x-hidden lg:h-screen lg:overflow-y-auto">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
