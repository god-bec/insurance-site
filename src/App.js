import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StripeContainer from "./components/StripeContainer";
import { About } from "./components/about/About";
import { Family } from "./components/family/Family";
import { Buyplan } from "./components/buyplan/Buyplan";
import { Proceedbuy } from "./components/proceedbuy/Proceedbuy";
import Cart from "./components/cart/Cart";
import { Data } from './components/data/Data.js'
import {CartContextProvider} from './cartContex/CartContext.js'
import { Parent } from "./components/parent/Parent";


function App() {
 


  return (
    <div>
    
      <CartContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<Family />} />
          <Route path="parent" element={<Parent/>}/>
          <Route path="pay" element={<StripeContainer />} />
          <Route path="about" element={<About />} />
          <Route path="/buyplan" element={<Buyplan data={Data} />}>
            <Route path=":id" element={<Proceedbuy data={Data} />} />
          </Route>
          <Route path="cart" element={<Cart  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );


}

export default App;




 // const [cartitem, setcartitem] = useState([]);

  // const onAdd = (el) => {
  //   const exist = cartitem.find((item) => {
  //    return item.id === el.id
  //   })
  //   if (exist) {
  //     setcartitem(cartitem.map((item) => {
  //      return item.id === el.id ? { ...exist, qty: exist.qty + 1 } : el
  //     }));
  //   }else{
  //     setcartitem([...cartitem,{...el, qty:1}]);
  //   }
  //   console.log(cartitem)
  // }