
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Achievements from "./sections/Achievements/Achievemain";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";

import { useRef, useState, useEffect } from "react";
import Myskill from "./sections/myskills/skill";
import Certificates from "./sections/Certificates/certificates";


const App = () => {
  // const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  return (
    <main
      // className={`${themeState.primary} ${themeState.background}`}
      
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
     
      <Services />
      <Portfolio />
      <Certificates/>
      {/* <Testimonials /> */}
      <Achievements  className="w3-container w3-center w3-animate-opacity"/>
      <Contact />
      {/* <Footer /> */}

      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;




