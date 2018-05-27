import React from 'react'
import { connect } from 'react-redux'
// import commerce from '../../images/commerce.png'
import MenuButton from './menu-button'
import Menu from './menu'
// import Intro from './intro'
import Play from './play'
import './playScreen.css'


export class PlayScreen extends React.Component{

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
        <div>    

          {menuRender}

          {playScreenRender}

        </div>  
      );

  }  

}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  signedIn: state.mainReducer.signedIn
})
export default connect(mapStateToProps)(PlayScreen)
