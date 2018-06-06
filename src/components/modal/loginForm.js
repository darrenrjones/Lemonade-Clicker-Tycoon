import React from 'react';

import Modal from 'react-modal';

import { connect } from 'react-redux';

import {Field, reduxForm, reset} from 'redux-form'

import { fetchSubmitRegister, fetchSubmitLogin } from '../../actions'

import './loginForm.css'

import { required, passwordLength } from './validators'; 

import Input from './input.js'


// Modal.setAppElement('#root');


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
    this.props.dispatch(fetchSubmitRegister(fields))
      .then(() => {
        if(!this.props.failedLoginError){
          this.toggleOpen();
          this.props.dispatch(reset('loginForm'));
        }
      });     
  }
  submitLogin(fields){   
    this.props.dispatch(fetchSubmitLogin(fields))
      .then(() => {
        if(!this.props.failedLoginError){
          this.toggleOpen();
          this.props.dispatch(reset('loginForm'));
        }
      }); 
  }
  onSubmit(fields){
    if (this.submittedButton === "login"){
      this.submitLogin(fields);
    } else if (this.submittedButton === 'register'){
      this.submitRegister(fields);
    }
  }

// static getDerivedStateFromProps(props, state){
//      if(props.signedIn && state.isOpen){
//        this.toggleOpen();    
//     }
// }

  

  render() {
    const { isOpen } = this.state;

    // need to check where .submitSucceeded happens
    // let successMessage;
    // if (!this.props.failedLoginError) {
    //   // console.log(this.props.submitSucceeded);
      
    //     successMessage = (
    //         <div className="message message-success">
    //             {this.props.submitSucceeded.toString()}
    //         </div>
    //     );
    // }
    let errorMessage;
    if (this.props.failedLoginError) {
        errorMessage = (
            <div className="message message-error">{this.props.failedLoginError}</div>
        );
    }

    // console.log('this.props: ',this.props);
    

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
            {/* {successMessage} */}
            {errorMessage}
            <label>Enter your credentials to login, or enter a unique Username and password to create a new account</label>
            <div className='form-input-div'>
              
              <Field 
                name='username'
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
                type='password'
                placeholder='xxxxxxxx'
                validate={[required, passwordLength]}                
              />

            </div>
            {/* <div className='form-button-div'> */}
              <button 
                className='form-button-login' 
                disabled={this.props.pristine || this.props.submitting}
                onClick={() => this.submittedButton = "login"}>
                LOGIN
              </button>
              <p className='or-paragraph'>or</p>
              <button
                className='form-button-register' 
                disabled={this.props.pristine || this.props.submitting}
                onClick={() => this.submittedButton = "register"}>
                REGISTER
              </button>
            {/* </div> */}
         
          </form>


          </div>
        </Modal>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  signedIn: state.mainReducer.signedIn,
  failedLoginError: state.mainReducer.error
})

LoginForm = connect(
  mapStateToProps
)(LoginForm)

export default reduxForm({
  form: 'loginForm',
  app: LoginForm,
})(LoginForm)






// TRY THIS WAY LATER ...

// export default connect(mapStateToProps)(reduxForm({
//   form: 'addIOU'
// })(IOUAddForm));