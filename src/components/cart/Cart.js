
import { React } from 'react'
import './cart.css'
import { CartContext } from '../../cartContex/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
   
const cart = useContext(CartContext)

//to get sub quantity of product
const cartBasket = cart.cartitem.reduce((sum,item)=>{
  return sum+item.qty;                          
},0);

const total= cart.cartitem.reduce((sum,item)=>{
  return (sum + item.price) * item.qty  
},0)


    return (
        <div className='main-cart'>
            <h1>Cart</h1>
            <div className='cart-header'>
            <h4>Health plan</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
        </div>
          {/* // when cart is empty */}
         {
     cart.cartitem.length === 0 && <div className='cart-container'>
    <div className='cart'>
        <h5>Cart is empty</h5>
         <div className='add-minus-div'>
             <button>+</button><input type="number" value="0" /><button>-</button>
            </div>
    <div>
        <h2>0</h2>
    </div>

</div>
</div>
}
{/* //when cart shows purshase to be made */}
  {cart.cartitem.map((item) => {
const price = item.price * item.qty;
    return (
        <main className='cart-container'>
                
             <div className='cart'>
                        <div>
                        <h5>{item.plan}</h5>
                     <h5>Unit Price:N{item.price}</h5>
                       </div>
                     
          
                    <div className='add-minus-div'>
                        <button onClick={()=>{cart.onAdd(item)}}>+</button><input type="number" value={item.qty}/><button onClick={()=>{cart.onDelete(item)}}>-</button>
                    </div>
                     <h2>{price}</h2>
              </div>     
        </main>

            )
})
 }
 {/* //when cart is not empty to get total payable amount */}
        {
            cart.cartitem.length !== 0 && 
            <div className='cart-amount'>
            <div className='cart-total'>
            <h4>Sub quantity</h4>
               <h2>Total</h2>
                <h2>Amount payable</h2>
                <Link to="/buyplan"> <button  className='cart-btn back'>BACK</button></Link>
              </div>
    <div className='cart-total'>
         <h4>{cartBasket}</h4>
     <h3> N{total.toFixed(2)}</h3>
      <h2>N{total.toFixed(2)}</h2>
      <Link to="/pay"> <button  className='cart-btn next'>Next</button></Link>
    

      
       </div>

      </div> 
        }


           
        </div>

    )
}

export default Cart










    
       
           
            
        