import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Events from "./components/Events";
import Sponsors from "./sections/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* navbar import begins */}
      <Navbar />
      {/* navbar import ends */}
      <div className=" min-h-screen">
        {/* Imports begin */}
        <Homepage />
        <About />
        <Blog />
        <Careers />
        <Events />
        <Sponsors />
        {/* import end */}
      </div>

      {/* footer import begins */}
      <Footer />
      {/* footer import ends */}
    </div>
  );
}

export default App;
