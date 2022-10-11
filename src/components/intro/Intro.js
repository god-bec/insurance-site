import React from 'react'
// import { useParams } from 'react-router-dom'
// import {healthplans} from '../plan/Data.js'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Intro.css'




export const Intro = (props) => {
    // const { id } = useParams();

    return (
        <div className='more'>
            <div className='more-intro'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                <Link
                    to="/"
                    className='more-link'
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
                    <Button variant="contained" color="primary" size="large">{props.button}</Button>
                </Link>

            </div>

           
        </div>
    )
}
