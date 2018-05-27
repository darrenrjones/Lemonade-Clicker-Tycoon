import React from 'react'
import { connect } from 'react-redux'
import { clickMain } from '../../actions'


export class Play extends React.Component{

  handleMainClick(){
    // console.log('screen clicked!'); 
    this.props.dispatch(clickMain());   
  }

render(){
  return(
    <div className='playScreen-container' onClick={() => this.handleMainClick()}>

    {/* <div className='lemonadeStand-image'>
      <img src={commerce} className="lemonadeStand-picture" alt="a lemonade stand"/>
    </div> */}      
    {/* <MenuButton handleMenuClick={() => this.handleMenuClick()}/> */}

    </div>
  )
}
}




const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  signedIn: state.mainReducer.signedIn
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