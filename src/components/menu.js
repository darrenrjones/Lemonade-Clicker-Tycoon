import React from 'react'
import { connect } from 'react-redux'


export class Menu extends React.Component{

  render(){
    return(
      <div className='menu-container'>
        
          <button className='menu-button'>MENU</button>
          <div>
            MenuState:{this.props.menuState}
          </div> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState
})

export default connect(mapStateToProps)(Menu);

