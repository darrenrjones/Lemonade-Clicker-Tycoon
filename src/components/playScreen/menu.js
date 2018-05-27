import React from 'react'
import { connect } from 'react-redux'
import './menu.css'
import EmployeeTemplate from './employeeTemplate'


// let autoClickerRefs = [

// ];

export class Menu extends React.Component{

  render(){
    return(
      <div className='menu-container'>  

        <EmployeeTemplate
         empTypeName='Employees'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={this.props.employees.currentCost.toLocaleString('en')}
         />

         <EmployeeTemplate
         empTypeName='Trucks'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={this.props.trucks.currentCost.toLocaleString('en')}
         />

         <EmployeeTemplate
         empTypeName='Planes'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={this.props.planes.currentCost.toLocaleString('en')}
         />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  clickValue: state.mainReducer.clickValue,
  employees: state.mainReducer.employees,
  trucks: state.mainReducer.trucks,
  planes: state.mainReducer.planes
})

export default connect(mapStateToProps)(Menu);

