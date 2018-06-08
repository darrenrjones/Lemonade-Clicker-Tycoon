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
   purchaseUpgradeOrganic,
   purchaseUpgradeDowntown,
   purchaseUpgradeNewYork,
   clickUpgradeMenu,
  } from '../../actions'


export class Menu extends React.Component{

  purchaseAutoClickerEmployee() {
    if(this.props.currentCash >= 10**(this.props.assets.employees + 1)){
      this.props.dispatch(purchaseAutoClickerEmployee());
    }    
  }
  purchaseAutoClickerTruck() {
    if(this.props.currentCash >= 100**(this.props.assets.trucks + 1)){
      this.props.dispatch(purchaseAutoClickerTruck());
    }    
  }
  purchaseAutoClickerPlane() {
    if(this.props.currentCash >= 1000**(this.props.assets.planes + 1)){
      this.props.dispatch(purchaseAutoClickerPlane());
    }    
  }
  handleUpgradeMenuClick(){
    this.props.dispatch(clickUpgradeMenu());
  }
  purchaseUpgradeOrganic() {
    if(this.props.currentCash >= 500){
      this.props.dispatch(purchaseUpgradeOrganic());
    }
  }
  purchaseUpgradeDowntown() {
    if(this.props.currentCash >= 5000){
      this.props.dispatch(purchaseUpgradeDowntown());
    }
  }
  purchaseUpgradeNewYork() {
    if(this.props.currentCash >= 50000){
      this.props.dispatch(purchaseUpgradeNewYork());
    }
  }

  render(){

    let menuRender;
    if(!this.props.upgradeView){
      menuRender = (
        <div className='menu-container'> 
          <EmployeeTemplate
            empTypeName='Employees'
            currentClickValue='1' 
            currentPurchaseCost={10**(this.props.assets.employees + 1)}
            rate='1'
            purchaseAutoClickers={() => this.purchaseAutoClickerEmployee()}
          />
          <EmployeeTemplate
            empTypeName='Trucks'
            currentClickValue='25'
            currentPurchaseCost={100**(this.props.assets.trucks + 1)}
            rate='10'
            purchaseAutoClickers={() => this.purchaseAutoClickerTruck()}
          />
          <EmployeeTemplate
            empTypeName='Planes'
            currentClickValue='1,000' 
            currentPurchaseCost={1000**(this.props.assets.planes + 1)}
            rate='60'
            purchaseAutoClickers={() => this.purchaseAutoClickerPlane()}
          /> 
          
      </div>
      )  
    }
    let upgradeRender;
    if(this.props.upgradeView){
      upgradeRender = (
        <div className='upgrades-container'>
          <UpgradeTemplate 
            upgradeTypeName='Organic lemons'
            description='People will pay more for organic! Now lemonade sells for $2 each!'
            cost={500}
            purchaseUpgrade={() => this.purchaseUpgradeOrganic()}
            bought={this.props.upgrades.organic} 
          />
          <UpgradeTemplate 
            upgradeTypeName='Downtown storefront'
            description='Move your stand to downtown. Shoppers there will spend $3 per lemonade!'
            cost={5000}
            purchaseUpgrade={() => this.purchaseUpgradeDowntown()}
            bought={this.props.upgrades.downtown}            
          />
          <UpgradeTemplate 
            upgradeTypeName='New York storefront'
            description='Move your stand to New York. Shoppers there will spend $5 per lemonade!'
            cost={50000}
            purchaseUpgrade={() => this.purchaseUpgradeNewYork()}
            bought={this.props.upgrades.newyork}
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
  currentCash: state.mainReducer.currentCash,
  upgrades: state.mainReducer.upgrades,
  upgradeView: state.mainReducer.upgradeView,
})

export default connect(mapStateToProps)(Menu);

