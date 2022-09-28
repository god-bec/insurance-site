import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { More } from "./components/more/More";
import { Details } from "./components/details/Details";
import StripeContainer from "./components/StripeContainer";
import { About } from "./components/about/About";
// import { Plan } from "./components/plan/Plan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/plan" element={<Plan />} /> */}
          <Route path="/plan" element={<More />} />
          <Route path="/details" element={<Details/>} />
          <Route path="/pay" element={<StripeContainer/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );


}

export default App;
