import React from 'react';

import Modal from 'react-modal';

import {Field, reduxForm, reset} from 'redux-form'

import { fetchSubmitRegister, fetchSubmitLogin } from '../../actions'

import './login.css'

import { required, passwordLength } from './validators'; 

import Input from './input.js'


Modal.setAppElement('#root');

export class LoginForm extends React.Component{
  constructor() {
    super();

    this.state = {
      isOpen: false  
    }
  }

  toggleOpen = e => {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen})    
  }

  submitRegister(fields){
    console.log('login form submitted!', fields);
    this.props.dispatch(fetchSubmitRegister(fields));

    this.props.dispatch(reset('loginForm')); 
  }

  submitLogin(fields){

    console.log('SubmitLogin submitted w/: ', fields);
    this.props.dispatch(fetchSubmitLogin(fields));

    this.props.dispatch(reset('loginForm'));     
  }

  onSubmit(fields){
    if (this.submittedButton === "login"){
      this.submitRegister(fields);
    } else if (this.submittedButton === 'register'){
      this.submitLogin(fields);
    }
  }

  

  render() {

    const { isOpen } = this.state;

    let successMessage;
    if (this.props.submitSucceeded) {
        successMessage = (
            <div className="message message-success">
                Message submitted successfully
            </div>
        );
    }
    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error">{this.props.error}</div>
        );
    }

    return (
      <div className='modal-form'>

        <button onClick={this.toggleOpen}>Log In</button>
        <Modal 
          className='modal-form-1'
          // overlayClassName='modal-overlay'
          isOpen={isOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleOpen}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>

          <h1 id='heading'>Log In or Register Below!</h1>
          <div id="fulldescription" tabIndex="0" role="document">
          <form 
            className='redux-form'
            onSubmit={this.props.handleSubmit(fields => this.onSubmit(fields))}
          >
            {successMessage}
            {errorMessage}
            <label>Enter your credentials to sign in, or enter a unique Username and password to create a new account</label>
            <div>
              
              <Field 
                name='userName'
                label='Username: '
                component={Input}
                type='text'
                placeholder='LemonadeDealer'
                validate={[required]}
              />
              <br/>

              <Field 
                name='password'
                label='Password: '
                component={Input}
                type='text'
                placeholder='xxxxxxxx'
                validate={[required, passwordLength]}                
              />

            </div>

            <button 
              disabled={this.props.pristine || this.props.submitting}
              onClick={() => this.submittedButton = "login"}>
              REGISTER
            </button>

            <button 
              disabled={this.props.pristine || this.props.submitting}
              onClick={() => this.submittedButton = "register"}>
              LOG IN
            </button>
          </form>


          </div>
        </Modal>
      </div>
    )
  }




}
export default reduxForm({
  form: 'loginForm',
  app: LoginForm
})(LoginForm)
