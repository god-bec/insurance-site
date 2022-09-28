import React from 'react'
import { BiMenu} from 'react-icons/bi';
import { IconButton, Button} from '@material-ui/core'
import './style.css'
import { useState } from 'react';
import { Link} from 'react-scroll';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const menuitems = [
    {
        id: '/plan',
        text: 'Our health plan',
        // icon: <BiChevronDown />,
        path: 'healthplan'
    },
    {
        id: 2,
        text: 'Contact',
        // icon: <BiChevronDown />,
        path: 'footer'
    },
    {
        id: 3,
        text: 'Resources',
        // icon: <BiChevronDown />,
        path: 'footer'
    },
    {
        id: 4,
        text: 'Login',
        path: '/'
    }

]
export const Navbar = () => {
    const [dropdown, setDropdown] = useState(true);
    const HandleClick = () => {
        setDropdown(!dropdown)

    }
    const navigate = useNavigate();
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
                                
                                    
                                        <Link
                                            to={item.path} 
                                            onClick={HandleClick}
                                            spy={true}
                                            smooth={true}
                                            hashSpy={true}
                                            offset={50}
                                            duration={500}
                                            delay={300}
                                            isDynamic={true}
                                            ignoreCancelEvents={false}
                                            spyThrottle={500}
                                        >
                                            <li key={item.id}>{item.text}</li>
                                        </Link>
                                  
                              

                            )
                        })
                    }
                    {/* <ul className='drp-ul'>
                        <li><h4>FAQ</h4></li>
                        <li>Call us: 09157795096</li>
                        <li>Whatsapp: 08148714389</li>
                        <li>Email: hellolizzy@gmail.com</li>
                    </ul> */}
                     <Link to='heathplan'>
                     <Button variant="contained" color="primary" size="small" onClick={()=>{ navigate('/'); HandleClick()} }>Get started</Button>
                     </Link>
                    
                   
                   

                </ul>

            </div>

        </div>



    )
}
