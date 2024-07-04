import React from 'react'
import './Signup_step2.css'
import Button from 'react-bootstrap/Button';

export default function Signup_step2() {
  return (
    <div className='inner-container2'>
        <a href='/' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <div className="tick"><i class="bi bi-check-circle"></i></div><br></br>
      <span>STEP <span className='bold'>2</span> OF <span className='bold'>3</span></span>
      <h2>Choose your plan.</h2>
      <div className="feature-container">
        <span className='feature-tick'><i class="bi bi-check-lg"></i></span><span className='features'> No commitments, cancel anytime.</span><br></br>
        <span className='feature-tick'><i class="bi bi-check-lg"></i></span>
          <div className="feature-text">
            <span className='features'> Everything on Netflix for one low price.</span><br></br>
          </div> 
        <span className='feature-tick'><i class="bi bi-check-lg"></i></span><span className='features'> No ads and no extra fees. Ever.</span>
      </div>
      <Button href='/signup/planform' className='btn-4'>Next</Button>
    </div>
  )
}
