
import {React, useState,useRef} from 'react'
import './cart.css'

const Cart = () => {
    const [cartitem, setCartitem] = useState([]);
 
    return (
        <main className='cart-container'>
            <h1>Cart</h1>
            <div className='cart'>
                <div>
                    <h4>Health plan</h4>
                    <h5>put the type of plan here</h5>
                    <h4>Unit Price:</h4>
                </div>
                <div className='add-minus-div'>
                    <h4>Quantity</h4>
                    <button>+</button><input type="number" value=""/><button>-</button>
                </div>
                <div>
                    <h4>Sub quantity</h4>
                    <h2>put item price here</h2>
                </div>
            </div>

            <div className='cart-amount'>
                <div className='cart-total'>
                    <h2>Total</h2>
                    <h1>Amount payable</h1>
                    <button className='cart-btn back' >BACK</button>
                </div>
                <div className='cart-total'>
                    <h3>put-total-amount here</h3>
                    <h2>put payable price here</h2>
                    <button  className='cart-btn next'>Next</button>
                </div>

            </div>
        </main>

    )
}

export default Cart