import React from 'react';

import Modal from 'react-modal';

import {Field, reduxForm, reset} from 'redux-form'

import { fetchSubmitLogin } from '../../actions'


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

  submitLogin(fields){
    // console.log('login form submitted!', fields);

    this.props.dispatch(fetchSubmitLogin(fields));

    this.props.dispatch(reset('loginForm')); 


  }

  render() {

    const { isOpen } = this.state;

    return (
      <div>

        <button onClick={this.toggleOpen}>Log In</button>
        <Modal 
          className='modal-form'
          // overlayClassName='modal-overlay'
          isOpen={isOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleOpen}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>

          <h1 id='heading'>Log In Form</h1>
          <div id="fulldescription" tabIndex="0" role="document">
          <form className='redux-form' onSubmit={this.props.handleSubmit(fields => this.submitLogin(fields))}>
            <label>Enter your credentials</label>
            <div>
              <label>Username</label>
              <Field 
                name='userName'
                component='input'
                type='text'
                placeholder='LemonadeDealer'

              />
              <br/>
              <label>Password</label> 

              <Field 
                name='password'
                component='input'
                type='text'
                placeholder='xxxxxxxx'
                
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
          <button onClick={this.toggleOpen}>Close</button>

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
