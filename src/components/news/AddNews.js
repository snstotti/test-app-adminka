import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { CostomForm } from '../Modal/formControl/FormControl'
import { required } from '../Modal/Validator/Validators'


const costomInput = CostomForm('input', "form-control")
const costomTextarea = CostomForm('textarea', "form-control")


const AddNews = ({handleSubmit}) => {
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label forhtml="exampleFormControlInput1">Название</label>
                <Field 
                    placeholder='Название' 
                    validate={[required]} 
                    component={costomInput} 
                    name='title'
                    id="exampleFormControlInput1" />
            </div>
            <div className="form-group">
                <label forhtml="exampleFormControlTextarea1">Введите текст</label>
                <Field 
                    placeholder='Текст новости' 
                    validate={[required]} 
                    component={costomTextarea} 
                    name='body'
                    id="exampleFormControlInput1" />
            </div>
            <button className='btn btn-primary'>Отправить</button>
        </form>
  );
}

 const AddNewsReduxForm = reduxForm({form: 'addNews'})(AddNews)

export default AddNewsReduxForm;
