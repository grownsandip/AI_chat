import React from 'react'
import "./signInPage.css";
import { SignIn } from '@clerk/clerk-react';
const SignInPage = () => {
  return (
    <div className='SingUpPage'>
      <SignIn path="/sign-in" />
    </div>
  )
}

export default SignInPage
