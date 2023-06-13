import { createContext,useState } from "react";


export const CartContext = createContext({
  cartitem: [],
  Famcartitem1: [],
  onAdd:()=>{},
  onDelete:()=>{},
  onAddmontly_Famplan : ()=>{}
});


export const CartContextProvider = ({children}) => {
const [cartitem, setcartitem] = useState([]);
const [Famcartitem1, setFamcartitem1] = useState([]);

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

//add to monthly family cart
const onAddmontly_Famplan = (el,QTY)=>{
  const exist = Famcartitem1.find((item)=>{
              return item.id === el.id
  })
  if(exist){
      setFamcartitem1(Famcartitem1.map((item)=>{return item.id === el.id? {...exist, qty:exist.qty + 1}: item}))
  }else{
    setFamcartitem1([...Famcartitem1,{...el,qty:QTY}])
  }
  
  
  }


const contextValue = {
  cartitem:cartitem,
  Famcartitem1:  Famcartitem1,
  onAddmontly_Famplan,
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