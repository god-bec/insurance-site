import React from 'react'
import './parent.css'
import { About } from '../about/About.js'
import {Intro} from '../intro/Intro'
import {Familyplan} from './Workplan.js'
import { Work } from '../works/Work'
import {parentplan } from './Workplan.js'
import parentpic from '../assets/parents.jpg'
import { Buyplan } from '../buyplan/Buyplan'
import {Data} from '../data/Data.js'


export const Parent = () => {
    
  
  return (
    <main className='more'>
      <Intro heading="Affordable Health Insurance For Pre-Existing Conditions" text="Affordable health insurance for people with pre-existing conditions like hypertension, diabetes, arthritis, and peptic ulcer" button="Buy now" link="buyplan"/>
      
             <div  className="filter-img">
              <img src={parentpic} alt="parentImg"/>
             </div>
         
      <Work title="Made specially for Papa and Mama" workplan={Familyplan}/>
      <About/>
      <Work title="How it works" workplan={parentplan}/>
     <Buyplan data={Data} id="buyplan"/>
    </main>
  )
}






