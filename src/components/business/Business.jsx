import React from 'react'
import {Intro2} from '../intro copy/Intro2'
import business2 from '../assets/business2.jpeg'
import { Work } from '../works/Work'
import { About } from '../about/About'
import { businessplan} from '../data/Data'

export const Business = () => {
  return (
    <div className='more'>
<Intro2 heading="Affordable Health Insurance For Corporates & SMEs" text="Your employees will be happier and healthier on our health insurance plans" link="/businessInput" button="Get a quote"></Intro2>
 <div className="filter-img">
    <img src={business2} alt='business'/>
 </div>
 <Work title="Sign up your company in minutes" workplan={businessplan}/>
      <About/>
    </div>
  )
}
