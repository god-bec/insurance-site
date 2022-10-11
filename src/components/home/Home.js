import React from 'react'
import { Button } from '@material-ui/core'
import './Homestyle.css'
import famImg from '../assets/img1.jpg'
import { Plan } from '../plan/Plan'
import { About } from '../about/About'
import { Link } from 'react-scroll'
import { healthplans } from './Data'



export const Home = () => {
  return (
    <div>
      <div className='services' id="home">
        <div className='services-content'>
          <h1>
            Health insurance plans for you, your family, and your employees
          </h1>
          <p>
            Sign up now to remove the worries about your employee’s or family’s health
          </p>
          <Link
          to="healthplan" 
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
          <Button variant="contained" color="primary" size="small">Get Health Insurance</Button>
          </Link>
          
        </div>
        <div className='service-img'>
          <img src={famImg} alt="famimage"/>
        </div>
      </div>
      <Plan title="We have plans for everyone" healthplans={healthplans} />
      
      <About/>
    </div>
  )
}
