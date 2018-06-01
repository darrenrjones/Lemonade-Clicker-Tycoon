import React from 'react';
// import { connect } from 'react-redux';

import Modal from 'react-modal';



Modal.setAppElement('#root');


export default class Intro extends React.Component{
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen})    
  }
  
  // modalToggle = (function() {
  //   let alreadyCalled = false;
  //   return function() {
  //     if(!alreadyCalled){
  //       alreadyCalled = true;
  //       this.toggleOpen();
  //     }
  //   };
  // })(); 

  componentWillMount(){
    // if(!this.props.signedIn){
      // this.modalToggle();  
    // }
    this.toggleOpen();
  }

  render(){

    const { isOpen } = this.state;  

    return(
     
      <div className='intro-container'>
        <Modal 
          className='modal-intro'
          // overlayClassName='modal-overlay'
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={this.toggleOpen}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>

            <p className='intro-paragraph'>
              Welcome to Lemonade Clicker Tycoon! <br/>
              Click anywhere on the green screen to sell lemonade.
              When you have enough money you can hire employees 
              trucks and planes to sell lemonade for you!
            <button className='intro-closebutton' onClick={() => this.toggleOpen()}>close</button>

            </p>
    

        </Modal>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   signedIn: state.mainReducer.signedIn,

// })

// export default connect(mapStateToProps)(Intro);


// export default reduxForm({
//   form: 'Intro',
//   app: Intro
// })(Intro)
