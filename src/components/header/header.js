import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
import './header.css'


export class Header extends React.Component{

  render(){
    return(
      <div className='header-container'>  

        <div className='employees-container'>
          <Employees/>
          <Employees/>
          <Employees/>
        </div>      
    
        <div className='currentCashHeader'>        
          <h1>Lemonade Clicker Tycoon!</h1>
          <span className='currentCashDisplay'>${this.props.currentCash.toLocaleString('en')}</span>
        </div>
        
        <span> <strong>Signed in: {this.props.signedIn.toString()}</strong> </span>        
    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash,
  signedIn: state.mainReducer.signedIn
})

export default connect(mapStateToProps)(Header)