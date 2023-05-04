import "./styles/main.scss";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Process from "./components/Process";
import WebSuccess from "./components/WebSuccess";
import Footer from "./components/Footer";
import Works from "./components/Works";
import FAQs from "./components/FAQs";
import Service from "./components/Service";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Landing />
         <Skills />
       <Service />
        <Process />
        <WebSuccess />
        <Works />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
