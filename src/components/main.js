import React from 'react'
import { connect } from 'react-redux'
import ClickScreen from './clickScreen'
import Header from './header'
import './clickScreen.css'




export class Main extends React.Component{

  render(){
    return(
      <div className='main-container'> 

        <Header />  

        <ClickScreen/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash
})

export default connect(mapStateToProps)(Main)