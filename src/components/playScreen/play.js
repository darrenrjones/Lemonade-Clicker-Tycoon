import React from 'react'
import { connect } from 'react-redux'
import { clickMain } from '../../actions'

import Audio from './audio'



export class Play extends React.Component{

  handleMainClick(){
    // console.log('screen clicked!'); 
    this.props.dispatch(clickMain());   
  }

  componentDidMount(){
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








// let introScreen;
// if(!this.props.signedIn){
//   introScreen = (
//     <div>
//       <Intro/>
//     </div>
//   )
// }