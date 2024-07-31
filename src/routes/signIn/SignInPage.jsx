import React from "react";
import "./signInPage.css";
import { SignIn } from "@clerk/clerk-react";
const SignInPage = () => {
  return (
    <div className="SingInPage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
