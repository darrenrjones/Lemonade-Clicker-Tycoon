import React from 'react'
import { connect } from 'react-redux'
import commerce from '../../images/commerce.png'
import MenuButton from './menu-button'
import Menu from './menu'
import Intro from './intro'
import { clickMenu, clickMain } from '../../actions'
import './playScreen.css'




export class PlayScreen extends React.Component{


  handleMenuClick(){
    // console.log('click clicked');
    this.props.dispatch(clickMenu());
  }

  handleMainClick(){
    console.log('screen clicked!'); 
    this.props.dispatch(clickMain());   
  }

  render(){

    let menuRender;
    if(this.props.menuState){
      menuRender = (
        <div className='menu-screen'>
          <Menu />
          <MenuButton handleMenuClick={() => this.handleMenuClick()}/> 
        </div>
      )     
    }  

    let playScreenRender;
    if(!this.props.menuState){
      playScreenRender = (
                <div className='playScreen-container' onClick={() => this.handleMainClick()}>

            {/* <div className='lemonadeStand-image'>
              <img src={commerce} className="lemonadeStand-picture" alt="a lemonade stand"/>
            </div> */}

            <Intro/>

            <MenuButton handleMenuClick={() => this.handleMenuClick()}/>
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
  menuState: state.mainReducer.menuState
})
export default connect(mapStateToProps)(PlayScreen)
