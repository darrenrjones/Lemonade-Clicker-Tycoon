import React from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';
import { toggleModalVisible } from '../../actions';



Modal.setAppElement('#root');


export class ModalNotice extends React.Component{


  toggleOpen = () => {
    this.props.dispatch(toggleModalVisible());
  }
  

  render(){

    return(
     
      <div className='intro-container'>
        <Modal 
          className='modal-intro'
          // overlayClassName='modal-overlay'
          isOpen={this.props.modalVisible}
          shouldCloseOnOverlayClick={false}
          // onRequestClose={this.toggleOpen}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>

          <div className='modal-message-container'>
          
            <p className='modal-message-paragraph'>
              {this.props.modalMessage}
            <button className='modal-closebutton' onClick={() => this.toggleOpen()}>x</button>            
              
            </p>
                        
          </div>
    

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.mainReducer.modalVisible,
  modalMessage: state.mainReducer.modalMessage
})

export default connect(mapStateToProps)(ModalNotice);


// export default reduxForm({
//   form: 'Intro',
//   app: Intro
// })(Intro)
