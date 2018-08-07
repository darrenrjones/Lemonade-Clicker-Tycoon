import React from 'react'
import { connect } from 'react-redux'
import PlayScreen from './playScreen/playScreen'
import Header from './header/header'
import './main.css'
import { refreshAuthToken } from '../actions';

export class Main extends React.Component{

  componentDidUpdate(prevProps){
    
    if(!prevProps.loggedIn && this.props.loggedIn){
      this.startPeriodicRefresh();
    } else if(prevProps.loggedIn && !this.props.loggedIn){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){ 
    this.stopPeriodicRefresh(); 
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(() => this.props.dispatch(refreshAuthToken()), 60 * 60 * 1000);
  }

  stopPeriodicRefresh(){
    if(!this.refreshInterval){ return; }
    clearInterval(this.refreshInterval);
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
  currentCash : state.mainReducer.currentCash,
  loggedIn: state.mainReducer.user !== null
})

export default connect(mapStateToProps)(Main);