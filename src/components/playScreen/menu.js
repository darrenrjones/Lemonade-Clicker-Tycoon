import React from 'react'
import { connect } from 'react-redux'
import './menu.css'
import EmployeeTemplate from './employeeTemplate'
import {
   autoClick,
   purchaseAutoClickerEmployee,
   purchaseAutoClickerTruck,
   purchaseAutoClickerPlane,
  } from '../../actions'



let autoClickerEmployeeRefs = [];
let autoClickerTrucksRefs = [];
let autoClickerPlanesRefs = [];

export class Menu extends React.Component{

  purchaseEmployeeAutoClickers() {
    let empSpeed = this.props.employees.employeeSpeed   

    if(this.props.currentCash >= this.props.employees.currentCost){
          this.props.dispatch(purchaseAutoClickerEmployee());
    autoClickerEmployeeRefs.push(setInterval(() => this.props.dispatch(autoClick(1)), empSpeed));
    console.log('auto employee clicked');
    }    
  }
  purchaseTruckAutoClickers() {
    let empSpeed = this.props.trucks.employeeSpeed   

    if(this.props.currentCash >= this.props.trucks.currentCost){
          this.props.dispatch(purchaseAutoClickerTruck());
    autoClickerTrucksRefs.push(setInterval(() => this.props.dispatch(autoClick(5)), empSpeed));
    console.log('auto truck clicked');
    }    
  }
  purchasePlaneAutoClickers() {
    let empSpeed = this.props.planes.employeeSpeed   

    if(this.props.currentCash >= this.props.planes.currentCost){
          this.props.dispatch(purchaseAutoClickerPlane());
    autoClickerPlanesRefs.push(setInterval(() => this.props.dispatch(autoClick(100)), empSpeed));
    console.log('auto truck clicked');
    }    
  }

  render(){
    return(
      <div className='menu-container'>  

        <EmployeeTemplate
         empTypeName='Employees'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={this.props.employees.currentCost.toLocaleString('en')}
         purchaseAutoClickers={() => this.purchaseEmployeeAutoClickers()}
         />

         <EmployeeTemplate
         empTypeName='Trucks'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={this.props.trucks.currentCost.toLocaleString('en')}
         purchaseAutoClickers={() => this.purchaseTruckAutoClickers()}

         />

         <EmployeeTemplate
         empTypeName='Planes'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={this.props.planes.currentCost.toLocaleString('en')}
         purchaseAutoClickers={() => this.purchasePlaneAutoClickers()}

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
  planes: state.mainReducer.planes,
  currentCash: state.mainReducer.currentCash
  

})

export default connect(mapStateToProps)(Menu);

