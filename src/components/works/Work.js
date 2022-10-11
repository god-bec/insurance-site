import React from 'react'
import './Work.css'







export const Work = (props) => {
           const workplan = props.workplan

    return (
        <div className='work' id="healthplan" >
            <div className='work-header'>
          <h1 >{props.title}</h1>
           </div>
            <div className="work-container">
            {
                workplan.map((plan) => {
                    return (
                        <div className="plan-content" key={plan.id}>
                        <div className='workplan-image'>{plan.image}</div>
                        <h3>{plan.header}</h3>
                        <p>{plan.text}</p>
                     
              
                       

                    </div>
                    )
                })
            }
          
            </div>
          
          
        </div>
    )
}
