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

    if(this.props.currentCash >= 5**(this.props.assets.employees + 1)){
      this.props.dispatch(purchaseAutoClickerEmployee());
      autoClickerEmployeeRefs.push(setInterval(() => this.props.dispatch(autoClick(1)), 1000));
      console.log('auto employee clicked');
    }    
  }
  purchaseTruckAutoClickers() {

    if(this.props.currentCash >= 10**(this.props.assets.trucks + 1)){
      this.props.dispatch(purchaseAutoClickerTruck());
      autoClickerTrucksRefs.push(setInterval(() => this.props.dispatch(autoClick(10)), 5000));
      console.log('auto truck clicked');
    }    
  }
  purchasePlaneAutoClickers() {

    if(this.props.currentCash >= 100**(this.props.assets.planes + 1)){
      this.props.dispatch(purchaseAutoClickerPlane());
      autoClickerPlanesRefs.push(setInterval(() => this.props.dispatch(autoClick(100)), 10000));
      console.log('auto plane clicked');
    }    
  }

  render(){
    return(
      <div className='menu-container'>  

        <EmployeeTemplate
         empTypeName='Employees'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={5**(this.props.assets.employees + 1)}
         purchaseAutoClickers={() => this.purchaseEmployeeAutoClickers()}
        />

         <EmployeeTemplate
          empTypeName='Trucks'
          currentClickValue={this.props.clickValue} 
          currentPurchaseCost={10**(this.props.assets.trucks + 1)}
          purchaseAutoClickers={() => this.purchaseTruckAutoClickers()}
        />

         <EmployeeTemplate
         empTypeName='Planes'
         currentClickValue={this.props.clickValue} 
         currentPurchaseCost={100**(this.props.assets.planes + 1)}
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

