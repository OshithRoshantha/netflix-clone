import React from 'react'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Signup_step2 from '../Components/Signup_step2'
import { useLocation } from 'react-router-dom';

export default function Planwelcome() {

  const location = useLocation();
  const {email} = location.state || {};

  return (
    <div>
        <Masterhead/>
        <div className="body-container">
            <Signup_step2 email={email}/>
        </div>
        <Globalfooter/>
    </div>
  )
}
