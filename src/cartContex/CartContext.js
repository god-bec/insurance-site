import { createContext,useState } from "react";


export const CartContext = createContext({
  cartitem: [],
  onAdd:()=>{},
  onDelete:()=>{}
});


export const CartContextProvider = ({children}) => {
const [cartitem, setcartitem] = useState([]);

//add to cart
const onAdd = (el)=>{
  const exist = cartitem.find((item)=>{
    return item.id === el.id;
  });

  if(exist){
    setcartitem(cartitem.map((item)=>{
      return item.id === el.id ? {...exist, qty:exist.qty + 1} : item
    }))
  }else{
    setcartitem([...cartitem, {...el,qty:1}])
  }
}
  
//remove from cart
  const onDelete = (el)=>{
    const exist = cartitem.find((item)=>{
      return item.id === el.id;
    });
    if(exist.qty === 1){
      setcartitem(cartitem.filter((item)=>{
       return item.id !== el.id
      }))
    }else{
      setcartitem(cartitem.map((item)=>{
        return item.id === el.id ? {...exist, qty:exist.qty - 1} : item
      }))
    }       
  }

const contextValue = {
  cartitem:cartitem,
  onAdd,
  onDelete
}


  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider