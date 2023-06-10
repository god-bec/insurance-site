import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StripeContainer from "./components/StripeContainer";
import { About } from "./components/about/About";
import { Family } from "./components/family/Family";
// import { Proceedbuy } from "./components/proceedbuy/Proceedbuy";
import Cart from "./components/cart/Cart";
import { Data } from './components/data/Data.js'
import {CartContextProvider} from './cartContex/CartContext.js'
import { Parent } from "./components/parent/Parent";
import { Practice } from "./components/practise/Practice";
import { Login } from "./components/login/Login";
import { ScrollToTop } from "./components/ScrollToTop";
// import { LoginInput } from "./components/LoginIntro/LoginInput";
import { LoginPageC } from "./components/login/LoginPageC";
import { LoginPageA } from "./components/login/LoginPageA";
import { LoginPageB } from "./components/login/LoginPageB";
import { Business } from "./components/business/Business";
import { BusInput } from "./components/business/BusInput";



function App() {
  // const findvalue = (thevalue)=>{
  //    console.log(thevalue)
  // }


  return (
    <div>
    
      <CartContextProvider>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<Family />} />
            <Route path="parent" element={<Parent/>}> 
          {/* <Route path=":id" element={<Proceedbuy data={Data}/>} /> */}
          </Route>
          <Route path="business" element={<Business/>}/>
          <Route path="businessInput" element={<BusInput/>}/>
          <Route path="pay" element={<StripeContainer />} />
          <Route path="about" element={<About />} />
         
          <Route path="cart" element={<Cart  />} />
          <Route path="prac" element={<Practice />} />
          <Route  path="login" element={<Login/>}/>
          <Route path="loginC" element={<LoginPageC/>}/>
          <Route path="loginA" element={<LoginPageA/>}/>
          <Route path="loginB" element={<LoginPageB/>}/>
        </Routes>
       
        
        <Footer/>
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