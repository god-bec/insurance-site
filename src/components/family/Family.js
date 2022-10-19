import React from 'react'
import './Family.css'
import { About } from '../about/About.js'
import {Intro} from '../intro/Intro'
import {Familyplan} from './Familyplan.js'
import { Work } from '../works/Work'
import { workplan } from './Workplan.js'
import { useParams } from 'react-router-dom'
import {  healthplans } from '../home/Data'


export const Family = () => {
    const { id } = useParams();
  
  return (
    <div className='more'>
      <Intro heading="Affordable Health Insurance For Individuals & Families" text="Pay zero naira everytime you need to see a primary care doctor" button="Buy now" link="/buyplan"/>
      {
        healthplans.filter((plan)=>{
     
             return(
              plan.id === parseInt(id)
             )
            
        }).map((plan)=>{
           return (
             <div  className="filter-img" key={plan.id}>
              <img src={plan.image} alt={plan.alt}/>
             </div>
           )
        })
      }
      <Work title="Made especially for you and your family" workplan={Familyplan}/>
      <About/>
      <Work title="How it works" workplan={workplan}/>
     
    </div>
  )
}






