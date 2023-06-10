import React from 'react'
import { BiMenu} from 'react-icons/bi';
import { IconButton, Button} from '@material-ui/core'
import './style.css'
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
// import { Link} from 'react-scroll/modules';
import { Link} from "react-router-dom";
import {HashLink } from "react-router-hash-link"


const menuitems = [
    {
        id: 1,
        text: 'Our health plan',
        icon: <BiChevronDown />
    },
    {
        id: 2,
        text: 'Support',
        icon: <BiChevronDown />
    },
    {
        id: 3,
        text: 'Resources',
        icon: <BiChevronDown />,
        path: '/'
    }    

]
export const Navbar = () => {
    //drop down burger for small screen
    const [dropdown, setDropdown] = useState(true);
    const HandleClick = (elId) => {
        setDropdown(!dropdown)
       
    }
  
// const navigate = useNavigate()


    //list dropdown event code
    const [contactDropdown, setcontactDropdown] = useState(true);
    const [listDropdown, setlistDropdown] = useState(true);
    const [listDropdown3, setlistDropdown3] = useState(true);

const drpdownHideWhenmouseEnter = (elId)=>{
    if(elId === 2){
        setcontactDropdown(false)
        
   }
   if(elId === 3){
    setlistDropdown(false)
     
}
if(elId === 1){
    setlistDropdown3(false)
     
}
}

const listMouseLeave = (elId)=>{
    if(elId === 2){
        setcontactDropdown(true);
        
   }
   if(elId === 3){
    setlistDropdown(true);
     
}
if(elId === 1){
    setlistDropdown3(true);
     
}
}



const drpdownHideWhenmouseLeave1 = ()=>{
    setcontactDropdown(!contactDropdown);
    setlistDropdown(true);
    setlistDropdown3(true);


}

const drpdownHideWhenmouseLeave2 = ()=>{
    setlistDropdown(!listDropdown);
    setcontactDropdown(true);
    setlistDropdown3(true);

}


const drpdownHideWhenmouseLeave3 = ()=>{
    setlistDropdown3(!listDropdown3);
    setcontactDropdown(true);
    setlistDropdown(true);
   

}

const [isin ,setisin] = useState(true)



    return (
        <div className='container'>
            <div className='menubar'>
                <h3>sureHealth</h3>
                <IconButton onClick={HandleClick} className="icon" >
                    < BiMenu />
                </IconButton>
            </div>
            <div>
                <ul className={dropdown ? 'menulist' : 'show'} >
                    {
                        menuitems.map((item) => {
                            return (
                                   <li key={item.id}  onMouseEnter={()=>{drpdownHideWhenmouseEnter(item.id)}}>{item.text}{item.icon}</li>
                            )
                        })
                    }
                     
                      
                    <ul className={contactDropdown ? 'hide-drp-ul': 'drp-ul list-1'} onMouseLeave={drpdownHideWhenmouseLeave1}>
                        <li><h4>FAQ</h4></li>
                        <li>Call us: 09157795096</li>
                        <li>Whatsapp: 08148714389</li>
                        <li>Email: hellolizzy@gmail.com</li>
                    </ul>
                    <ul className={listDropdown ? 'hide-drp-ul': 'drp-ul list-2'} onMouseLeave={drpdownHideWhenmouseLeave2}>
                        <li>Your available hospitals</li>
                        <li>Your benefit list</li>
                        <li>Download your care app</li>
                    </ul>
                    <ul className={listDropdown3 ? 'hide-drp-ul': 'drp-ul list-3'} onMouseLeave={drpdownHideWhenmouseLeave3}>
                        <li>For You and Your Family</li>
                        <li>For Your Parents</li>
                        <li>For Your Parents</li>
                    </ul>
                    <Link to="/login" ><li>Login</li></Link> 
                    
                     <HashLink smooth to="/#healthplan"><Button variant="contained" color="primary" size="small">Get started </Button></HashLink>
                     
                     <AiOutlineShoppingCart />
                    </ul>

            </div>

        </div>



    )
}

