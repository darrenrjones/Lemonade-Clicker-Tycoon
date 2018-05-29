import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
import './header.css'


export class Header extends React.Component{

  render(){
    return(
      <div className='header-container'>  

        <div className='employees-container'>

          <Employees
            empTypeName={this.props.employees.name}
            empCount={this.props.employees.count}
          />

          <Employees
            empTypeName={this.props.trucks.name}
            empCount={this.props.trucks.count}

          />

          <Employees 
            empTypeName={this.props.planes.name}
            empCount={this.props.planes.count}
            
          />

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
  signedIn: state.mainReducer.signedIn,
  employees: state.mainReducer.employees,
  trucks: state.mainReducer.trucks,
  planes: state.mainReducer.planes,
})

export default connect(mapStateToProps)(Header)