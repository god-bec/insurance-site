import React from 'react'
import './parent.css'
import { About } from '../about/About.js'
import {Intro} from '../intro/Intro'
import {Familyplan} from '../data/Data'
import { Work } from '../works/Work'
import {parentplan } from '../data/Data'
import parentpic from '../assets/parents.jpg'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import { CartContext } from '../../cartContex/CartContext'
import { useContext } from 'react'
import {Data} from '../data/Data.js'

// import { FcDisplay } from 'react-icons/fc'





export const Parent = () => {
  const [findSearch, setfindSearch] = useState(false)
  const [searchInput, setsearchInput] = useState("");
  const [buyplan, setbuyplan] = useState([]);
  const [isclicked, setisclicked] = useState(false);

    const handlechange = (e) =>{
      setfindSearch(true)
      setsearchInput(e.target.value)
     setbuyplan(false);
     setisclicked(false)
   
      // props.onGetvalue(searchInput)
    }

    const handleclick = () =>{
      setfindSearch(false)
    }
    

const Search = Data.filter((item)=>{
    const reg = new RegExp(searchInput,'gi');
    if(item.name.match(reg) || item.state.match(reg)) {
      return item;
    }else {
      return null
     }
    
 })
// to display more content of list item when clickied when user searches choice

const DisplayLi = (getID)=>{
  setfindSearch(false)
  setisclicked(true)
    let getsearchItem = Data.find((item)=>{
        if(getID === item.id){
          return item
         }else {
          return null
         }
    });
    setsearchInput("");
    setbuyplan(getsearchItem)
}
const userChoice = [buyplan]
const parentCart = useContext(CartContext);
// console.log(parentCart.cartitem)



  return (
    <main className='more'>
     
      <Intro heading="Affordable Health Insurance For Pre-Existing Conditions" text="Affordable health insurance for people with pre-existing conditions like hypertension, diabetes, arthritis, and peptic ulcer" button="Buy now" link="buyplan"/>
      
             <div  className="filter-img">
              <img src={parentpic} alt="parentImg"/>
             </div>
         
      <Work title="Made specially for Papa and Mama" workplan={Familyplan}/>
      <About/>
      <Work title="How it works" workplan={parentplan}/>
    

     <div className='Buyplan' id="buyplan">
               <h3>Pre existing condition Benefit</h3>
                 <p>Pre-existing condition are Serious illness that have existed AT ANY TIME BEFORE the start of your insurance plan.
                     With this pre-existing condition coverage,treatment,test and drugs for selected condition like Hypertention, Dibeties, Arthritis, and peptic ulcer are covered from the moment you buy the plan.
                    This is perfect for older parents, senior citizen or anyone battling with any of these conditions.You can visit the <Link to=''>Pre-existing condition section</Link> of the FAQs for more details
                     Click <Link to=''>here</Link> to view a comprehensive list of benefits for the pre-existing Condition Plan
                 </p>
                 <h2>Buy plan</h2>
             <form >
                           <label>Please select a hospital. Search by hospital name or location</label><br />
                                <input type='search' id="search" value={searchInput} placeholder='search' onChange={handlechange} onClick={handleclick}/>

                 </form>
                 {findSearch && Search.map((item)=>{
                   return (
                    <ul className='hospital-list-ul'><li key={item.id} onClick={()=>{DisplayLi(item.id)}}>{item.name}</li></ul>
                   )
                 })}

          </div>
          {isclicked && userChoice.map((item)=>{
                return (
                    <div className='proceed'>
                            <h3 key={item.id}>you will be buying this plan for {item.price}</h3>
                          <Button variant="contained" color="primary" size="small" onClick={()=>{parentCart.onAdd(item)}}>Proceed to buy plan</Button>
                         
                    </div>
                )
            })}
    </main>
  )
}






