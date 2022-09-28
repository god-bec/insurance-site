import React from 'react'
import './plan.css'
import { healthplans } from './Data.js'
import { Link } from 'react-router-dom'





export const Plan = () => {
    return (
        <div className='plan' id="healthplan" >
            <div className='plan-header'>
          <h1 >We have health plans for everyone</h1>
           </div>
            <div className="plan-container">
            {
                healthplans.map((plan) => {
                    return (
                        <div className="plan-content" key={plan.id}>
                        <img src={plan.image} alt={plan.alt} />
                        <h3>{plan.header}</h3>
                        <p>{plan.text}</p>
                     
                            <Link to={'/plan'}> <button className='button'>{plan.button}  </button></Link>
                       

                    </div>
                    )
                })
            }
          
            </div>
          
          
        </div>
    )
}
