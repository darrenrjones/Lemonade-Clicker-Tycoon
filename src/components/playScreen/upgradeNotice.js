import React from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';
// import loginForm from '../modal/loginForm';



Modal.setAppElement('#root');


export class upgradeNotice extends React.Component{
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
  
  modalToggle = (function() {
    let alreadyCalled = false;
    return function() {
      if(!alreadyCalled){
        alreadyCalled = true;
        this.toggleOpen();
      }
    };
  })();

  render(){

    if(this.props.currentCash >= 5 && this.props.assetsEmployees < 1){
      this.modalToggle();  
    }

    const { isOpen } = this.state;  

    return(
     
      <div className='upgradeNotice-container'>
        <Modal 
          className='modal-upgradeNotice'
          // overlayClassName='modal-overlay'
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={this.toggleOpen}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>

            <p className='upgradeNotice-paragraph'>
              Looks like you could use some help selling all that sweet sweet lemonade.
              Click the menu and hire an employee who will sell lemonade for you!
            <button className='upgradeNotice-closebutton' onClick={() => this.toggleOpen()}>close</button>

            </p>    

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCash: state.mainReducer.currentCash,
  assetsEmployees: state.mainReducer.assets.employees

})

export default connect(mapStateToProps)(upgradeNotice);


// export default reduxForm({
//   form: 'Intro',
//   app: Intro
// })(Intro)
