import React from 'react'

import './LoginIntro.css'






export const LoginIntro = (props) => {


    return (
        <div className='more'>
            <div className='login-intro'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
            
        </div>
      
    )
}
