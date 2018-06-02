import React from 'react'
import { connect } from 'react-redux'
import PlayScreen from './playScreen/playScreen'
import Header from './header/header'
import './main.css'

import ws from 'ws'



export class Main extends React.Component{

componentDidMount() {

    var ws = new WebSocket('ws://localhost:40510');

    ws.onopen = function () {
        console.log('websocket is connected ...')
        ws.send('connected')
        ws.send(JSON.stringify({test: 'this is a test'}));

    }

    ws.onmessage = function (ev) {
        console.log(ev);
    }
}


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