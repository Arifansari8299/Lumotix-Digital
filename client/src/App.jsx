import Navbar from "./components/Navbar";
import ServicesCard from "./components/ServicesCard";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* navbar height fix */}
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to MyApp 🚀</h1>
        </section>
        <ServicesCard />
      </div>
    </div>
  );
}
