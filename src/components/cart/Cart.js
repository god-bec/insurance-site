
import { React } from 'react'
import './cart.css'
import { CartContext } from '../../cartContex/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
   
const cart = useContext(CartContext)

    return (
        <div>
         {
cart.cartitem.length === 0 ? <div className='cart-container'>
    <div className='cart'>
    <h1>Cart</h1>
<div>
    <h4>Health plan</h4>
    <h5>Cart is empty</h5>

</div>
<div className='add-minus-div'>
    <h4>Quantity</h4>
    <button>+</button><input type="number" value="0" /><button>-</button>
</div>
<div>
    <h4>Sub quantity</h4>
    <h2>0</h2>
</div>
</div>
</div>:
  cart.cartitem.map((item) => {
    const total = (item.qty * item.price)
    return (
        <main className='cart-container'>
                  <h1>Cart</h1>
          <div className='cart'>
          
                   <div>
                          <h4>Health plan</h4>
                            <h4>Unit Price:N{item.price}</h4>
                   </div>
                    <div className='add-minus-div'>
                        <h4>Quantity</h4>
                        <button onClick={()=>{cart.onAdd(item)}}>+</button><input type="number" value={item.qty}/><button onClick={()=>{cart.onDelete(item)}}>-</button>
                    </div>
                       <div>
                            <h4>Sub quantity</h4>
                            <h2>{item.qty}</h2>
                       </div>


                   </div>

                   <div className='cart-amount'>
                   <div className='cart-total'>
                      <h2>Total</h2>
                       <h1>Amount payable</h1>
                       <Link to="/buyplan"> <button  className='cart-btn back'>BACK</button></Link>
                     </div>
           <div className='cart-total'>
            <h3> N{total.toFixed(2)}</h3>
             <h2>N{total.toFixed(2)}</h2>
             <Link to="/pay"> <button  className='cart-btn next'>Next</button></Link>
           

             
              </div>

             </div> 











        </main>

            )
})


         }
            



           
        </div>

    )
}

export default Cart










    
       
           
            
        