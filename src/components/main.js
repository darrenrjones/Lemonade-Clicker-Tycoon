import React from 'react'
import { connect } from 'react-redux'



export class Main extends React.Component{

  render(){
    return(
      <div>Here we go!</div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash
})

export default connect(mapStateToProps)(Main)