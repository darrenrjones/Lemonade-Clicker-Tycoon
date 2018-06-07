import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
import './header.css'
import LoginForm from '../modal/loginForm'
import Save from'./save'
import { fetchSave } from '../../actions';

export class Header extends React.Component{

  saveSubmit = () => {    
    this.props.dispatch(fetchSave())
  }

  render(){

    return(
      <div className='header-container'>  

        <div className='employees-container'>
          <Employees
            empTypeName={'Employees'}
            empCount={this.props.assets.employees}
          />
          <Employees
            empTypeName={'Trucks'}
            empCount={this.props.assets.trucks}
          />
          <Employees 
            empTypeName={"Planes"}
            empCount={this.props.assets.planes}            
          />
        </div>      
    
        <section className='currentCashHeader'>        
          <h1 role='banner'>Lemonade Clicker Tycoon!</h1>
          <div aria-labelledby="current-cash-display" className='current-cash-display'>
            <span>${this.props.currentCash.toLocaleString('en')}</span>
          </div>
        </section>

        <div className='right-side-header'>
        
          <div className='signedin-div'>
            <div className={this.props.signedIn ? 'signedin signedin-green' : null}>Signed in: {
              this.props.signedIn ? this.props.username : this.props.signedIn.toString()
              }  
            </div>
          </div>
    
          <div className='login-save-div' >
            <LoginForm />
            <Save saveSubmit={() => this.saveSubmit()}/> 
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
  error: state.mainReducer.error

})

export default connect(mapStateToProps)(Header)