import React from 'react'
import { connect } from 'react-redux'

import Menu from './menu'
import Play from './play'
import ModalNotice from './modalNotice'
import './playScreen2.css'

import {
  clickMenu,
  autoClick,
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
    autoClickerTrucksRef = setInterval(() => this.props.dispatch(autoClick(this.props.assets.trucks * 25)), 10000);
    autoClickerPlanesRef = setInterval(() => this.props.dispatch(autoClick(this.props.assets.planes * 1000)), 60000);
  }

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
          <Play />
      )
    }    

      return(
        <div role='main'>    

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
});
export default connect(mapStateToProps)(PlayScreen);
