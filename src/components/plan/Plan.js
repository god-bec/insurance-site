import React from 'react'
import './plan.css'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'







export const Plan = (props) => {
    const healthplans = props.healthplans

// useEffect(() => {
    
// }, []);

    return (
        <div className='plan' id="healthplan" >
            <div className='plan-header'>
          <h1 >{props.title}</h1>
           </div>
            <div className="plan-container">
            {
                healthplans.map((plan) => {
                    return (
                        <div className="plan-content" key={plan.id}>
                        <img src={plan.image} alt={plan.alt} />
                        <h3>{plan.header}</h3>
                        <p>{plan.text}</p>
                        <Link to={plan.link}> <button className='button'>{plan.button}</button></Link>
                    </div>
                    )
                })
            }
          
            </div>
            
          
          
        </div>
    )
}
