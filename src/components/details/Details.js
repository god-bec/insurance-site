import {React,useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@material-ui/core'
import './Details.css'
import { bookplan } from '../data/Data'
import { anualplan} from '../data/Data'
// import { CartContext } from '../../cartContex/CartContext'
// import { useContext } from 'react'

export const Details = () => {
//     const [getmonthvalue, setgetmonthvalue] = useState(null);
// const [getanualvalue, setgetanualvalue] = useState(null);
const monthinput = useRef(null);
const anualinput = useRef(null);


const handleChange = (el)=>{
//  setgetmonthvalue(el)

}




//Plans to display when clicked  
const [anual,setAnual] = useState(false);
const [month,setMonth] = useState(true);
const anualPlan = ()=>{
    setAnual(true);
    setMonth(false);
}
const monthlyPlan = ()=>{
    setMonth(true);
    setAnual(false);
   
}

// const monthCart = useContext(CartContext)




    return (

        <div className='details' id="buy" >
            <div className='det-intro' >
                
            <h1>Plan and Pricing</h1>
             <p>Select any comfortable payment plan that works for you. You can buy as many plans as you want. Please note that subsequent payments will be debited automatically from your card</p>
            </div>
             <ButtonGroup>
                <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={monthlyPlan}
                >
                 Monthly
                </Button>
                  <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={anualPlan}
                >
                 Anually
                </Button>
            </ButtonGroup>         
            <div className='details-container' >
                
               {month &&
                    bookplan.map((plan) => {
                      return(
                        <div className='details-content' key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className='amount'>
                                <h1>{plan.cost}</h1>
                                <h4>{plan.person}</h4>
                            </div>
                            <form className='form'>
                                <input type='number' name='num' placeholder="howmany people do you want to buy for" key={plan.id}  ref={monthinput} onChange={handleChange}/><br/> <br/>
                               
                                <Button 
                                variant="contained" color="primary" size="large" 
                                onClick={()=>{
                                    
                                }}
                                >{plan.buy}</Button>
                              
                              
                            </form>
                            <div className='details-writup' >
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
                   { anual && anualplan.map((plan) => {
                      return(
                        <div className='details-content' key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className='amount'>
                                <h1>{plan.cost}</h1>
                                <h4>{plan.person}</h4>
                            </div>
                            <form className='form'>
                                <input type='number' placeholder="howmany people do you want to buy for" key={plan.id}  ref={anualinput} /><br/> <br/>
                                <Link to='' className='details-link'>
                                <Button 
                                variant="contained" color="primary" size="large" 
                                onClick={()=>{
                                
                                }}>{plan.buy}</Button>
                                </Link>
                              
                            </form>
                            <div className='details-writup' >
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
