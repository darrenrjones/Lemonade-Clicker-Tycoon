import React from 'react'
import { connect } from 'react-redux'
import Employees from './employees'
import './header.css'
import LoginForm from '../modal/loginForm'
import Save from'./save'
import { fetchSave } from '../../actions';



export class Header extends React.Component{

  saveSubmit = () => {    
    this.props.dispatch(fetchSave())
  }

  render(){
    // console.log('this.props: ',this.props);
    // if(!this.props.currentUser){
    //   return <div>LOADING...</div>
    // }
    return(
      <div className='header-container'>  

        <div className='employees-container'>
          <Employees
            empTypeName={'Employees'}
            empCount={this.props.assets.employees}
          />
          <Employees
            empTypeName={'Trucks'}
            empCount={this.props.assets.trucks}
          />
          <Employees 
            empTypeName={"Planes"}
            empCount={this.props.assets.planes}            
          />
        </div>      
    
        <div className='currentCashHeader'>        
          <h1>Lemonade Clicker Tycoon!</h1>
          <span className='currentCashDisplay'>${this.props.currentCash.toLocaleString('en')}</span>
        </div>
        
        <span> <strong>Signed in: {
          this.props.signedIn ? this.props.username : this.props.signedIn.toString()
          }</strong> </span>
        <LoginForm />
        <Save saveSubmit={() => this.saveSubmit()}/>        
    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash : state.mainReducer.currentCash,
  signedIn: state.mainReducer.signedIn,
  assets: state.mainReducer.assets,
  currentUser: state.mainReducer.currentUser,
  username: state.mainReducer.username

})

export default connect(mapStateToProps)(Header)