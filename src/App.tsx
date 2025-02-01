import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target.hash) {
        event.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');

    // Add event listeners
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white dark:bg-dark text-gray-900 dark:text-white">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Features />
          <Demo />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
