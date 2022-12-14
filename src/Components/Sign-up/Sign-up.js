import React from 'react';
import './Sign-up.css';
import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';
import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-button/Custom-button';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
           displayName:'',
           email: '',
           password: '',
           confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try{
          const{ user } = await auth.createUserWithEmailAndPassword(email, password);
          createUserProfileDocument(user, {displayName});
          this.setState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
          })
        }catch(error){
           console.log(error);
        }
    }

    handleChange = event => {
        const{ name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const{ displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <div className='title'>I do not have an account</div>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                   <FormInput type='text'
                   name='displayName'
                   value={displayName}
                   onChange={this.handleChange}
                   label='Display Name'
                   required />

                   <FormInput type='email'
                   name='email'
                   value={email}
                   onChange={this.handleChange}
                   label='email'
                   required />

                   <FormInput type='password'
                   name='password'
                   value={password}
                   onChange={this.handleChange}
                   label='Password'
                   required />

                <FormInput type='password'
                   name='confirmPassword'
                   value={confirmPassword}
                   onChange={this.handleChange}
                   label='Confirm Password'
                   required />
                <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;