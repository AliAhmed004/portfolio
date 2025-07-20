import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Syed Ali Ahmed is a professional software engineer specializing in web-based solutions. Explore the portfolio to see his range of projects."
        />
        <meta
          name="keywords"
          content="Syed Ali Ahmed, Software Engineer, Web Developer, Portfolio, Projects"
        />
        <meta name="author" content="Syed Ali Ahmed" />
        <meta
          property="og:title"
          content="Syed Ali Ahmed | Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Syed Ali Ahmed is a professional software engineer specializing in web-based solutions. Explore the portfolio to see his range of projects."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D4D03AQGEosU_LVZPsA/profile-displayphoto-shrink_200_200/0/1689194095692?e=1696464000&v=beta&t=b7HIpEXnwsK78CIzy-c5moWT3bTEfpR2lf5PiD7l0p4"
        />
        <meta
          property="og:url"
          content="https://media.licdn.com/dms/image/D4D03AQGEosU_LVZPsA/profile-displayphoto-shrink_200_200/0/1689194095692?e=1696464000&v=beta&t=b7HIpEXnwsK78CIzy-c5moWT3bTEfpR2lf5PiD7l0p4"
        />
        <meta
          name="twitter:card"
          content="https://media.licdn.com/dms/image/D4D03AQGEosU_LVZPsA/profile-displayphoto-shrink_200_200/0/1689194095692?e=1696464000&v=beta&t=b7HIpEXnwsK78CIzy-c5moWT3bTEfpR2lf5PiD7l0p4"
        />
      </Helmet>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
