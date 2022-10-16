import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import data from './db.json'
import './proceedbuy.css'



export const Proceedbuy = () => {
    const {id} = useParams()
  return (
    <div>
        {
            data.filter((item)=>{


            return (
                item.id === parseInt(id)
            )

            }).map((item)=>{
                return (
                    <div className='proceed'>
                            <h3>you will be buying this plan for {item.price}</h3>
                           <Link to="/details" className='proceed-link'><Button variant="contained" color="primary" size="small">Proceed to buy plan</Button></Link> 
                    </div>
                )
            })
        }
    </div>
  )
}



































    // const { id } = useParams()

    // const navigate = useNavigate()
   
         