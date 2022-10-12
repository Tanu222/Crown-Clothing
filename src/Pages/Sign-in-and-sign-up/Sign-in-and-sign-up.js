import './Sign-in-and-sign-up.css';
import React from 'react';
import SignIn from '../../Components/Sign-in/Sign-in';
import SignUp from '../../Components/Sign-up/Sign-up';

const SignInAndSignUpPage = () => {
    return(
        <div className='Sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;