import React from 'react'
import { connect } from 'react-redux'
import PlayScreen from './playScreen/playScreen'
import Header from './header/header'
import './main.css'



export class Main extends React.Component{



  render(){
    return(
      <div className='main-container'> 

        <Header />  

        <PlayScreen/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash
})

export default connect(mapStateToProps)(Main)