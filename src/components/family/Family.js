import React from 'react'
import './Family.css'
import { About } from '../about/About.js'
import {Intro} from '../intro/Intro'
import {plan, Familyplan} from './Workplan.js'
import { Work } from '../works/Work'
import family from '../assets/family.jpg'
import { Details } from '../details/Details'


export const Family = () => {
    
  
  return (
    <main className='more'>
      <Intro heading="Affordable Health Insurance For Individuals & Families" text="Pay zero naira everytime you need to see a primary care doctor" button="Buy now" link="details"/>
      
             <div  className="filterimg">
              <img src={family} alt="famImg"/>
             </div>
         
      <Work title="Made especially for you and your family" workplan={Familyplan}/>
      <About/>
      <Work title="How it works" workplan={plan}/>
     <Details id="details"/>
    </main>
  )
}
