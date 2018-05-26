import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
import './header.css'


export class Header extends React.Component{

  render(){
    return(
      <div className='header-container'>        
        <Employees/>
        <Employees/>
        <Employees/>
        <div className='currentCashHeader'>        
          <h1>Lemonade Clicker Tycoon!</h1>
          <span className='currentCashDisplay'>${this.props.currentCash}</span>
        </div>        
    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash
})

export default connect(mapStateToProps)(Header)