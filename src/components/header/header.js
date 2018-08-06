import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
// import './header.css'

import './header2.css'

import LoginForm from '../modal/loginForm'

import Save from'./save'
import { fetchSave, saveSuccessDisplay } from '../../actions';

export class Header extends React.Component{

  saveSubmit = () => {
    if(this.props.signedIn){
      this.props.dispatch(fetchSave());
      this.props.dispatch(saveSuccessDisplay(null));
    }    
  }

  render(){
    return(
      <div className='header-container'>  

        <div className='employees-container'>

          <div className='employee-container'>
            <Employees
              empTypeName={'Employees'}
              empCount={this.props.assets.employees}
            />
          </div>
          <div className='employee-container'>
            <Employees
              empTypeName={'Trucks'}
              empCount={this.props.assets.trucks}
            />
          </div>
          <div className='employee-container'>
            <Employees 
              empTypeName={"Planes"}
              empCount={this.props.assets.planes}            
            />
          </div>

        </div>      
    
        <section className='currentCashHeader'>        
          <img 
          className='banner' 
            alt='Lemonade Clicker Tycoon banner in wood frame' 
            src={require('../../images/bannernowood.png')} 
          />
          <div className='current-cash-display'>
            <span>${this.props.currentCash.toLocaleString('en')}</span>
          </div>
        </section>

        <div className='right-side-header'>
        
          {/* <div className='login-button-container'> */}
          {/* <div className='signedin-div'> */}
            <div className={this.props.signedIn ? 'signedin-div signedin' : 'signedin-div'}>
              { this.props.signedIn ? <span className='signedin-username'><span className='signedin-div-span'>Signed in: </span>{this.props.username}</span> : <LoginForm /> }  
            </div>
          {/* </div> */}
      
          <div className='save-div' >
            <Save
              saveSubmit={() => this.saveSubmit()}
              saveSuccess={this.props.saveSuccess}
            />
          </div>

        </div>
               
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash,
  signedIn: state.mainReducer.signedIn,
  assets: state.mainReducer.assets,
  currentUser: state.mainReducer.currentUser,
  username: state.mainReducer.username,
  error: state.mainReducer.error,
  saveSuccess: state.mainReducer.saveSuccess,
})

export default connect(mapStateToProps)(Header)