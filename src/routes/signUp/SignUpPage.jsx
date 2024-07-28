import React from 'react'
import "./signUpPage.css";
import {SignUp} from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className='SignUpPage'>
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SignUpPage
