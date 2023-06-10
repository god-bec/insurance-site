import {React} from 'react'
import { LoginIntro } from '../LoginIntro/LoginIntro'

import { LoginType } from '../data/Data'
import { LoginBtn } from '../LoginIntro/LoginBtn'



export const Login = () => {
  return (
    <div>
       <LoginIntro heading='Select the one that applies to you' text="We offer a variety of tools and services to anyone who's a member of the Reliance Family. If you're one of us, click on the link that applies to you to proceed." />
       <LoginBtn workplan={LoginType}/>
    </div>
  )
}