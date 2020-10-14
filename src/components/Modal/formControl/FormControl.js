import React from 'react'
import s from './formControl.css'




export const CostomForm = (type, classes = null) => ({input ,meta: {touched, error, warning}, ...props}) =>{
    
    let hasError = touched && error
    let errorclassname = hasError ? s.inputError : ''
     
    return (
        <div className='wrapper'>
            {type === 'textarea' 
                ? <textarea {...input} {...props} className={errorclassname || classes} type={type}/> 
                : <input {...input} {...props} className={errorclassname || classes} type={type} />}
            
            {touched &&
                ((error && <span className='textError'>{error}</span>) ||
                    (warning && <span className='textError'>{warning}</span>))}
        </div>
    )
}