import { HashLoader } from "react-spinners";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navs from "./Components/NavBar/Navbar";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader
            color="#9067C6"
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />
          <Navs />
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Resume />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
