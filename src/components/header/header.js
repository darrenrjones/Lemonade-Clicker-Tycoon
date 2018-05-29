import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
import './header.css'
import LoginForm from '../modal/login'



export class Header extends React.Component{

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
    
        <div className='currentCashHeader'>        
          <h1>Lemonade Clicker Tycoon!</h1>
          <span className='currentCashDisplay'>${this.props.currentCash.toLocaleString('en')}</span>
        </div>
        
        <span> <strong>Signed in: {this.props.signedIn.toString()}</strong> </span>
        <LoginForm />        
    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash,
  signedIn: state.mainReducer.signedIn,
  assets: state.mainReducer.assets
})

export default connect(mapStateToProps)(Header)