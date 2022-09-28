import React from 'react'
import './Work.css'
import { workplan } from './workplan.js'
// import { Link } from 'react-router-dom'





export const Work = () => {
    return (
        <div className='plan' id="healthplan" >
            <div className='plan-header'>
          <h1 >Plan and Planning</h1>
           </div>
            <div className="plan-container">
            {
                workplan.map((plan) => {
                    return (
                        <div className="plan-content" key={plan.id}>
                        <div className='workplan-image'>{plan.image}</div>
                        <h3>{plan.header}</h3>
                        <p>{plan.text}</p>
                     
                            {/* <Link to={'/plan'}> <button className='button'>{plan.button}  </button></Link> */}
                       

                    </div>
                    )
                })
            }
          
            </div>
          
          
        </div>
    )
}
