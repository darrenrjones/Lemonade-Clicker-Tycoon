

import React from 'react'
import { connect } from 'react-redux'


import Menu from './menu'
import Play from './play'
// import Intro from './intro'
// import UpgradeNotice from './upgradeNotice'
import ModalNotice from './modalNotice'
import './playScreen.css'
import {
  clickMenu,
  autoClick,
  toggleModalVisible,
  sellUpgrade,
 } from '../../actions'
 
/*eslint-disable */
let autoClickerEmployeeRef; 
let autoClickerTrucksRef;
let autoClickerPlanesRef;
/*eslint-enable */

export class PlayScreen extends React.Component{

  handleMenuClick(){
    this.props.dispatch(clickMenu());
  } 

  componentDidMount(){    
    autoClickerEmployeeRef = setInterval(() => this.props.dispatch(autoClick(this.props.assets.employees)), 1000)
    autoClickerTrucksRef = setInterval(() => this.props.dispatch(autoClick(this.props.assets.trucks * 10)), 5000);
    autoClickerPlanesRef = setInterval(() => this.props.dispatch(autoClick(this.props.assets.planes * 100)), 10000);
    if(this.props.seenMessage < 5 && this.props.currentCash >= 5){
      
      console.log('sellUpgrade calling...');
      
      this.props.dispatch(sellUpgrade(5));     

    }
  }
  // componentWillUnmount(){
  //   clearInterval(autoClickerEmployeeRef);
  //   clearInterval(autoClickerTrucksRef);
  //   clearInterval(autoClickerPlanesRef);
  // }
  // componentWillMount(){
    
  //   if(this.props.seenMessage < 5 && this.props.currentCash >= 5){
      
  //     console.log('sellUpgrade calling...');
      
  //     this.props.dispatch(sellUpgrade(5));     

  //   }
  // }



  // toggleEmployeeNoticeModal = (function() {
  //   let alreadyCalled = false;
  //   return function() {
  //     if(!alreadyCalled){
  //       this.props.dispatch(toggleModalVisible()); 
  //       this.props.dispatch(changeModalMessage('It looks like you could use some help selling all that sweet sweet lemonade. Click the \'MENU\' button and hire an employee!'));
  //       alreadyCalled = true;     
  //     }
  //   };
  // })();
  // toggleTruckNoticeModal = (function() {
  //   let alreadyCalled = false;
  //   return function() {
  //     if(!alreadyCalled){
  //       this.props.dispatch(toggleModalVisible()); 
  //       this.props.dispatch(changeModalMessage('The demand for you lemonade has grown throughout the city! We better start delivering to local stores! Click the \'MENU\' and purchase a delivery truck!'));
  //       alreadyCalled = true;     
  //     }
  //   };
  // })();

  render(){

    let menuRender;
    if(this.props.menuState){
      menuRender = (
        <div className='menu-screen'>
          <Menu />           
        </div>
      )     
    }  
    let playScreenRender;
    if(!this.props.menuState){
      playScreenRender = (
              <div>
                <Play />
              </div>
      )
    }    
    // console.log(this.props.seenMessage);
    // console.log(this.props.currentCash);

    // if(this.props.seenMessage < 5 && this.props.currentCash >= 5){
      
    //   console.log('sellUpgrade calling...');
      
    //   this.props.dispatch(sellUpgrade(5));     

    // }
    // if(this.props.currentCash >= 10**(this.props.assets.trucks + 1) && this.props.assets.trucks < 1){
    //   this.toggleTruckNoticeModal();
    // }


      return(
        <div className='playscreen'>    

          {menuRender}

          {playScreenRender}

          <ModalNotice />

          <button className='menu-button' onClick={() => this.handleMenuClick()}>MENU</button>

        </div>  
      );

  }  

}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  signedIn: state.mainReducer.signedIn,
  clickValue: state.mainReducer.clickValue,
  assets: state.mainReducer.assets,
  currentCash: state.mainReducer.currentCash,
  messages: state.mainReducer.messages ,
  seenMessage: state.mainReducer.seenMessage
})
export default connect(mapStateToProps)(PlayScreen)
