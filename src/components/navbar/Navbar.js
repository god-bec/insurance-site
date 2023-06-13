import React from 'react'
import { BiMenu} from 'react-icons/bi';
import { IconButton, Button} from '@material-ui/core'
import './style.css'
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link} from "react-router-dom";
import {HashLink } from "react-router-hash-link"


const menuitems = [
    {
        id: 1,
        text: 'Our health plan',
        icon: <BiChevronDown />,
        title: 'FAQ',
        phone: '09157795096',
        call: '08148714389',
        mail: 'hellolizzy@gmail.com'


        
        
    },
    {
        id: 2,
        text: 'Support',
        icon: <BiChevronDown />,
        phone:'Your available hospitals',
        call: 'Your benefit list',
        mail: 'Download your care app'

    },
    {
        id: 3,
        text: 'Resources',
        icon: <BiChevronDown />,
        phone: 'For You and Your Family',
        call: 'For Your Parents',
        mail: 'Download your care app'
    }    

]
export const Navbar = () => {
    



    //list dropdown event code
    const [contactDropdown, setcontactDropdown] = useState(null);
    const [navbarDropdown, setnavbarDropdown] = useState(true);


const drpdownHideWhenmouseEnter= (el)=>{
    setcontactDropdown(el.id)

}

const listMouseLeave = (el)=>{
setcontactDropdown(!el.id);
}

//drop down burger for small screen

const HandleClick = () => {
    setnavbarDropdown(!navbarDropdown)
    
   
}







    return (
        <div className='container'>
            <div className='menubar'>
                <h3>sureHealth</h3>
                <IconButton onClick={HandleClick} className="icon" >
                    < BiMenu  id='icon'/>
                </IconButton>
            </div>
            <div className={navbarDropdown ? 'hide-nav':'navb-con'}>
                
                    {
                        menuitems.map((item) => {
                            return (
                                <ul className="menulist" key={item.id}>
                                    <li   onMouseMove={()=>{drpdownHideWhenmouseEnter(item)}}  onMouseLeave={()=>{listMouseLeave(item)}}>{item.text}{item.icon}</li>
                                   <ul className={contactDropdown === item.id ? 'drp-ul' :'hide-drp-ul'}  onMouseMove={()=>{drpdownHideWhenmouseEnter(item)}}  onMouseLeave={()=>{listMouseLeave(item)}}> 
                                    <li>{item.title}</li>
                                    <li>{item.phone}</li>
                                    <li>{item.call}</li>
                                    <li>{item.mail}</li>
                                    </ul>
                               
                                </ul>
                                   
                            )
                        })
                    }
                     
                    <Link to="/login" className='link'><li>Login</li></Link> 
                    
                     <HashLink smooth to="/#healthplan" className='link'><Button variant="contained" color="primary" size="small">Get started </Button></HashLink>
                     
                     <AiOutlineShoppingCart />
                   

            </div>

        </div>



    )
}

