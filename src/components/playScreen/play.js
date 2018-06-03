import React from 'react'
import { connect } from 'react-redux'
import { clickMain } from '../../actions'


export class Play extends React.Component{

  handleMainClick(){
    // console.log('screen clicked!'); 
    this.props.dispatch(clickMain());   
  }

  componentDidMount(){
  }


render(){

  // let user = this.props.currentUser.map((user,i) => <li key={i}>username: {user.username} <br/> cash: $ {user.currentCash.toLocaleString('en')}</li>)
  return(
    <div className='playscreen-container' onClick={() => this.handleMainClick()}>
    
    <ul>
      {/* {user} */}
    </ul>


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