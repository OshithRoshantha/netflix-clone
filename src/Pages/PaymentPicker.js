import React from 'react'
import './PaymentPicker.css'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'

export default function PaymentPicker() {
  return (
    <div>
        <a href='/' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="body-container">
            <div className="inner-box">
                <img className='payment-lock1' src='/Assets/lock.png'></img>
                <br></br>
                <span>STEP <span className='bold'>3</span> OF <span className='bold'>3</span></span>
                <h2>Choose how to pay</h2>
                <p className='payment-text'>Your payment is encrypted and you can change how you pay anytime.</p>
                <p className='payment-text bold2'>Secure for peace of mind.<br></br>
                Cancel easily online.</p><br></br>
                <div className="secure-server-badge-text">End-to-end encrypted<img className='encrypt-badge' src='/Assets/encrypt.png'></img></div>
                <a href='/signup/creditoption' className="payment-selector">
                    <p className='payment-selector-text'>Credit or Debit Card</p>
                    <img src='/Assets/visa.png'></img>
                    <img src='/Assets/master.png'></img>
                    <img src='/Assets/amex.png'></img>
                    <img className='arrow' src='/Assets/arrow.png'></img>
                </a>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
