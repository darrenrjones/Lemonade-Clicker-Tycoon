import React from 'react';

import Modal from 'react-modal';



Modal.setAppElement('#root');


export default class Intro extends React.Component{
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleOpen = e => {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen})    
  }
  

  render(){
    return(
      <div className='intro-container'>
        <p>
            Welcome to Lemonade Clicker Tycoon!
          Click anywhere on the blue screen to sell lemonade.
          When you have enough money to can hire employees 
          trucks and planes to sell lemonade for you!
        </p>
      </div>
    );
  }
}

// export default reduxForm({
//   form: 'Intro',
//   app: Intro
// })(Intro)
