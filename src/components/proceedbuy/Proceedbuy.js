import {React} from 'react'
import { Link, useParams} from 'react-router-dom'
import { Button } from '@material-ui/core';
import './proceedbuy.css'
import {CartContext} from '../../cartContex/CartContext';
import { useContext } from 'react';





export const Proceedbuy = (props) => {
    const {id} = useParams(); 
      const {data}= props;
     const cart = useContext(CartContext)
    const cartBasket = cart.cartitem.reduce((sum,item)=>{
                                return sum+item.qty;                          
    },0)

console.log(cartBasket)


  return (
    <div className='proceed-container'>
        {
            data.filter((item)=>{


            return (
                item.id === parseInt(id)
            )

            }).map((item)=>{
                return (
                    <div className='proceed'>
                            <h3 key={item.id}>you will be buying this plan for {item.price}</h3>
                           <Button variant="contained" color="primary" size="small" onClick={()=>{cart.onAdd(item)}} >
                            Proceed to buy plan</Button> 
                         
                    </div>
                )
            })
        }
 {
    cartBasket ?<Link to="/cart" className='goto-cart-link'>
    <button className='button'> you have<button className='goto-cart'>{cartBasket}</button>  items in your cart</button>
    </Link>: ""
 }
        
    </div>
  )
}



































    // const { id } = useParams()

    // const navigate = useNavigate()
   
         