import React from 'react'
import { useParams } from 'react-router-dom'
import {healthplans} from '../plan/Data.js'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './More.css'
import { About } from '../about/About.js'
import { Plan } from '../plan/Plan.js'

export const More = () => {
    const { id } = useParams();
    
  return (
    <div className='more'>
    <div className='more-intro'>
        <h1>Affordable Health Insurance For Corporates & SMEs</h1>
        <p>Your employees will be happier and healthier on our health insurance plans</p>
        <Link
          to="/" 
          className='more-link'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          >
          <Button variant="contained" color="primary" size="large">Get started</Button>
          </Link>
          {
            healthplans.map((plan)=>{
               return(
                <div key={id} className="more-content">
                    <div className='more-image'>
                    <img src={plan.image} alt={plan.alt} />
                    </div>
                    <div className='more-details'>
                    <h3>{plan.header}</h3>
                        <p>{plan.text}</p>
                        <Link to={`/details`} className='more-link' > 
                        <Button variant="contained" color="primary" size="large">
                            {plan.buy}
                        </Button></Link>
                     
                    </div>
                    
                </div>
               ) 
            })
          }

    </div>
    <About/>
    <Plan/>
    </div>
  )
}
