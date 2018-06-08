import React from 'react'


export default function Save(props){
 
  return(
    <div className='save-button-div'>
      <button
        onClick={() => props.saveSubmit()}
        className={props.saveSuccess ? 'saveSuccess' : 'saveFail' }      
      >
        SAVE        
      </button>
    </div>
  );  
  
}