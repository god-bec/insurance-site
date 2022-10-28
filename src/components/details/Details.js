import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import './Details.css'
import { bookplan } from './Bookplan'



export const Details = () => {
const [isqty, setIsqty]  = useState();

const handleChange = (e)=>{
  setIsqty(e.target.value);
}


    return (

        <div className='details'>
            <div className='more-intro' >
            <h1>Plan and Pricing</h1>
             <p>Pay zero naira everytime you need to see a primary care doctor</p>
            </div>
                      
            <div className='details-container' id="buy">
                
                {
                    bookplan.map((plan) => {
                      return(
                        <div className='details-content' key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className='amount'>
                                <h1>{plan.cost}</h1>
                                <h4>{plan.person}</h4>
                            </div>
                            <form className='form'>
                                <input type='number' placeholder="howmany people do you want to buy for"  value={isqty} onChange={handleChange}/><br/> <br/>
                                <Link to='' className='details-link'>
                                <Button variant="contained" color="primary" size="large">{plan.buy}</Button>
                                </Link>
                              
                            </form>
                            <div className='details-writup'>
                                <p>Combined medical cover of ₦1.2 Million per year
                                     {plan.cost}, limit for surgeries available per year*
                                    Unlimited chats and phone calls with medical doctors
                                    Free drug pick-ups from the nearest pharmacy to your home
                                    Roam across 876 tier 4 hospitals
                                    Pay zero naira for hospital registration fees
                                      {plan.num} sessions with specialist doctors per year*
                                      {plan.num} sessions with a pediatrician per year*
                                    Immunization for children
                                    Ambulance services - roadside to hospital*
                                    Primary dental care*
                                    ₦15,000 limit for eye care per year*
                                    1 gym session weekly*
                                    Hospital accommodation for —{plan.days} days per year*
                                    Hospital ward care – general ward*
                                    Instant access to healthcare*</p>
                            </div>
                        </div>
                      )
                    })
                }
            </div>
          
           

          
        </div>
    )
}
