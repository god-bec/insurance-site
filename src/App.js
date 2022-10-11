import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Details } from "./components/details/Details";
import StripeContainer from "./components/StripeContainer";
import { About } from "./components/about/About";
import { Family } from "./components/family/Family";
// import { Plan } from "./components/plan/Plan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family/:id" element={<Family/>} />
          <Route path="details" element={<Details/>} />
          <Route path="pay" element={<StripeContainer/>} />
          <Route path="about" element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );


}

export default App;
