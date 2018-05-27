import React from 'react'
import { connect } from 'react-redux'
import './menu.css'


export class Menu extends React.Component{

  render(){
    return(
      <div className='menu-container'>  

        <div className='employee-menu-container'>
          <h2>Employees</h2>
          <p> Each employee sells {1} lemonade/second</p>
          <form>
              <button>BUY</button>
              <span>$200</span>
          </form>
        
        </div>

        <div className='truck-menu-container'>
          <h2>Delivery trucks</h2>
          <p> Each truck sells {10} lemonade/second</p>
          <form>
              <button>BUY</button>
              <span>$10,000</span>
          </form>
        </div>

        <div className='plane-menu-container'>
          <h2>Cargo Plane</h2>
          <p> Each plane sells {100} lemonade/second</p>
          <form>
              <button>BUY</button>
              <span>$1,000,000</span>
          </form>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState
})

export default connect(mapStateToProps)(Menu);

