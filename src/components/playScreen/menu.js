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
   purchaseUpgradeOrganic
  } from '../../actions'

// let employeePurchaseCost = 5**(this.state.assets.employees + 1);

export class Menu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      upgradeView: false,
      organic: false,
      downtown: false,
      newyork: false,
    }
  }

  purchaseAutoClickerEmployee() {
    if(this.props.currentCash >= 5**(this.props.assets.employees + 1)){
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
    this.setState({
      upgradeView: !this.state.upgradeView
    })
  }
  purchaseUpgradeOrganic() {
    console.log('organice purchased!');
    if(this.props.currentCash >= 500){
      this.setState({
        organic: true
      })
      this.props.dispatch(purchaseUpgradeOrganic());
    }
    console.log('this.state.organic:',this.state.organic);

  }


  render(){
    console.log('this.state.organic:',this.state.organic);

    let menuRender;
    if(!this.state.upgradeView){
      menuRender = (
        <div className='menu-container'> 
          <EmployeeTemplate
            empTypeName='Employees'
            currentClickValue='1' 
            currentPurchaseCost={5**(this.props.assets.employees + 1)}
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
    if(this.state.upgradeView){
      upgradeRender = (
        <div className='upgrades-container'>
          <UpgradeTemplate 
            upgradeTypeName='Organic lemons'
            description='People will pay more for organic! Now lemonade sells for $2 each!'
            cost={500}
            purchaseUpgrade={() => this.purchaseUpgradeOrganic()}
            bought={this.state.organic} 
          />
          <UpgradeTemplate 
            upgradeTypeName='COMING SOON!'
            description='Move your stand to downtown. Shoppers there will spend $3 per lemonade!'
            cost={5000}
            purchaseUpgrade={() => console.log('2nd upgrade buy button clicked')}
            bought={this.state.downtown}            
          />
          <UpgradeTemplate 
            upgradeTypeName='COMING SOON!'
            description='Move your stand to New York. Shoppers there will spend $5 per lemonade!'
            cost={15000}
            purchaseUpgrade={() => console.log('3rd upgrade buy button clicked')}
            bought={this.state.newyork}
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

