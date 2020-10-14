import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { initialize } from '../../redux/app-reduce'
import LoginReduxForm from './AuthForm'
import './ModalForm.css'

Modal.setAppElement('#root')

const ModalForm = ({openModal, closeModal,initialize, authError, adminLoggedIn}) => {

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          transform             : 'translate(-50%, -50%)',
          MarginBottom : '30px'
        }
    }

    const onSubmit = (formData) =>{
        initialize(formData)
    }
    const error = authError && <span className='text-danger'>{authError}</span>
    
    return (
        
        <Modal isOpen={openModal} style={customStyles} >
            <div className='titleModal'>
                <h1>Hello</h1>
            <button className='btn m-0 btn-light' onClick={()=>closeModal(false)}>X</button>
            </div>
            {!adminLoggedIn && error}
            <LoginReduxForm onSubmit={onSubmit} />
        </Modal>
        
    )
}

const mapStateToProps =(state)=>{
    return{
      adminLoggedIn: state.app.adminLoggedIn,
      authError: state.app.authError
    }
  }
  
export default connect(mapStateToProps,{initialize})(ModalForm)
