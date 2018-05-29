import React from 'react'
import { connect } from 'react-redux'
import { clickMenu } from '../../actions'

import Menu from './menu'
import Play from './play'
import './playScreen.css'


export class PlayScreen extends React.Component{

  handleMenuClick(){
    // console.log('click clicked');
    this.props.dispatch(clickMenu());
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
              <div>
                <Play />
              </div>
      )
    }
      return(
        <div className='playscreen'>    

          {menuRender}

          {playScreenRender}

          <button className='menu-button' onClick={() => this.handleMenuClick()}>MENU</button>

        </div>  
      );

  }  

}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  signedIn: state.mainReducer.signedIn
})
export default connect(mapStateToProps)(PlayScreen)
