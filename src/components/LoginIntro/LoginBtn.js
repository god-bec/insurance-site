import React from 'react'
import './LoginIntro.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'






export const LoginBtn = (props) => {
           const workplan = props.workplan

    return (
        <div className='log' id="healthplan" >
            
            <div className="log-container">
            {
                workplan.map((plan) => {
                    return (
                        <div className="log-content" key={plan.id}>
                        <div className='log-image'><img src={plan.image} alt="login type"/></div>
                        <h3>{plan.header}</h3>
                        <p>{plan.text}</p>
                        <Link to={plan.path} id="linkBtn"><Button variant="contained" color="primary" size="small" >Login</Button></Link>
                    </div>
                    )
                })
            }
          
            </div>
          
          
        </div>
    )
}
