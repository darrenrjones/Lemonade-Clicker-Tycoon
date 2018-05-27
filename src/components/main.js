import React from 'react'
import { connect } from 'react-redux'
import PlayScreen from './playScreen/playScreen'
import Header from './header/header'
import { clickMenu } from '../actions'
import './main.css'



export class Main extends React.Component{

  handleMenuClick(){
    // console.log('click clicked');
    this.props.dispatch(clickMenu());
  }

  render(){
    return(
      <div className='main-container'> 

        <Header />  

        <PlayScreen/>

        <button className='menu-button' onClick={() => this.handleMenuClick()}>MENU</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash
})

export default connect(mapStateToProps)(Main)