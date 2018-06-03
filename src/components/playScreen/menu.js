import React from 'react'
import { connect } from 'react-redux'
import './menu.css'
import EmployeeTemplate from './employeeTemplate'
import {
   purchaseAutoClickerEmployee,
   purchaseAutoClickerTruck,
   purchaseAutoClickerPlane,
  } from '../../actions'

// let employeePurchaseCost = 5**(this.state.assets.employees + 1);

export class Menu extends React.Component{



  purchaseEmployeeAutoClickers() {
    if(this.props.currentCash >= 5**(this.props.assets.employees + 1)){
      this.props.dispatch(purchaseAutoClickerEmployee());
    }    
  }
  purchaseTruckAutoClickers() {
    if(this.props.currentCash >= 100**(this.props.assets.trucks + 1)){
      this.props.dispatch(purchaseAutoClickerTruck());
    }    
  }
  purchasePlaneAutoClickers() {
    if(this.props.currentCash >= 1000**(this.props.assets.planes + 1)){
      this.props.dispatch(purchaseAutoClickerPlane());
    }    
  }

  render(){
    return(
      <div className='menu-container'>  

        <EmployeeTemplate
         empTypeName='Employees'
         currentClickValue='1' 
         currentPurchaseCost={5**(this.props.assets.employees + 1)}
         rate='1'
         purchaseAutoClickers={() => this.purchaseEmployeeAutoClickers()}
        />

         <EmployeeTemplate
          empTypeName='Trucks'
          currentClickValue='10'
          currentPurchaseCost={100**(this.props.assets.trucks + 1)}
          rate='5'
          purchaseAutoClickers={() => this.purchaseTruckAutoClickers()}
        />

         <EmployeeTemplate
         empTypeName='Planes'
         currentClickValue='100' 
         currentPurchaseCost={1000**(this.props.assets.planes + 1)}
         rate='60'
         purchaseAutoClickers={() => this.purchasePlaneAutoClickers()}
         /> 

      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  clickValue: state.mainReducer.clickValue,
  assets: state.mainReducer.assets,
  currentCash: state.mainReducer.currentCash
})

export default connect(mapStateToProps)(Menu);

