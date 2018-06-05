import React from 'react'
import { connect } from 'react-redux'
import './menu.css'
import './upgradesMenu.css'
import EmployeeTemplate from './employeeTemplate'
import UpgradeTemplate from './upgradeTemplate'
import {
   purchaseAutoClickerEmployee,
   purchaseAutoClickerTruck,
   purchaseAutoClickerPlane,
  } from '../../actions'

// let employeePurchaseCost = 5**(this.state.assets.employees + 1);

export class Menu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      upgradeView: false
    }
  }

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
  handleUpgradeMenuClick(){
    this.setState({
      upgradeView: !this.state.upgradeView
    })
  }

  render(){

    let menuRender;
    if(!this.state.upgradeView){
      menuRender = (
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
            currentClickValue='25'
            currentPurchaseCost={100**(this.props.assets.trucks + 1)}
            rate='10'
            purchaseAutoClickers={() => this.purchaseTruckAutoClickers()}
          />
          <EmployeeTemplate
            empTypeName='Planes'
            currentClickValue='1,000' 
            currentPurchaseCost={1000**(this.props.assets.planes + 1)}
            rate='60'
            purchaseAutoClickers={() => this.purchasePlaneAutoClickers()}
          /> 
          
      </div>
      )  
    }
    let upgradeRender;
    if(this.state.upgradeView){
      upgradeRender = (
        <div className='upgrades-container'>
          <UpgradeTemplate 
            upgradeTypeName='Organic lemons'
            description='People will pay more for organic! Now lemonade sells for $2 each!' 
          />
          <UpgradeTemplate 
            upgradeTypeName='COMING SOON!'
            description='more cool features in upcoming update!' 
          />
          <UpgradeTemplate 
            upgradeTypeName='COMING SOON!'
            description='more cool features in upcoming update!' 
          />       
        </div>
      )
    }   
    return(
      <div > 

        {menuRender}     

        {upgradeRender}

        <button className='upgrades-button' onClick={() => this.handleUpgradeMenuClick()}>UPGRADES</button>

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

