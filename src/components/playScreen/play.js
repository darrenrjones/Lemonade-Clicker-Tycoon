import React from 'react'
import { connect } from 'react-redux'
import { clickMain } from '../../actions'

import Audio from './audio'



export class Play extends React.Component{

  handleMainClick(){
    this.props.dispatch(clickMain());   
  }

  render(){

    return(
      <div className='playscreen-container' onClick={() => this.handleMainClick()}>   
    
        <Audio />

      </div>
    )
  }
}



const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  currentUser: state.mainReducer.currentUser
})

export default connect(mapStateToProps)(Play);
