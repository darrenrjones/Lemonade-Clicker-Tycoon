import React from 'react'
import { connect } from 'react-redux'
import commerce from '../images/commerce.png'
import Menu from './menu'
import Intro from './intro'




export class ClickScreen extends React.Component{

  render(){

    if(!this.props.menuState){
      return (
        <div className='clickScreen-container'>

          <div className='lemonadeStand-image'>
            <img src={commerce} className="lemonadeStand-picture" alt="a lemonade stand"/>
          </div>

          <Intro/>

          <Menu />

        </div>
      )    
    } else {
         return(
      <div className='menu-screen'>
        This is the menu


      </div>
    );
    }

 
  }
}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState
})
export default connect(mapStateToProps)(ClickScreen)
