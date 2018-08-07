import React from 'react'
import { connect } from 'react-redux'
import { clickMain, clearAuth } from '../../actions'

import Audio from './audio'
import { clearAuthToken } from '../../local-storage';



export class Play extends React.Component{

  handleMainClick(){
    this.props.dispatch(clickMain());   
  }
  logout(){
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){

    let logoutRender;
    if(this.props.signedIn){
      logoutRender = (
        <button 
          className='logout-button'
          onClick={() => this.logout()}>
          LOG OUT
        </button>
      )
    }
    return(
      <div className='playscreen-container' onClick={() => this.handleMainClick()}>   
    
        <Audio />
        {/* {logoutRender}         */}

      </div>
    )
  }
}



const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  currentUser: state.mainReducer.currentUser,
  signedIn: state.mainReducer.signedIn
})

export default connect(mapStateToProps)(Play);
