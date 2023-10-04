import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import AboutMe from "./component/AboutMe";
import MySkill from "./component/MySkill";
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <AboutMe />
      <MySkill/>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
