import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CostomForm } from './formControl/FormControl';
import { required } from './Validator/Validators';

const costomPassword = CostomForm('password')
const costomInput = CostomForm('input')

const AuthForm =({handleSubmit})=> {

    return (
        <form onSubmit={handleSubmit}>
            <Field 
                    placeholder='login' 
                    validate={[required]} 
                    component={costomInput} 
                    name='login' />
           <Field 
                    placeholder='password' 
                    validate={[required]} 
                    component={costomPassword}
                    name='password' />
            <button>Войти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(AuthForm)

export default LoginReduxForm;
