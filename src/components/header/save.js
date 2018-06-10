import React from 'react'


export default function Save(props){ 

  const saveClass = () => {
    if(props.saveSuccess){
      return 'saveSuccess'
    } else if (!props.saveSuccess){
      return 'saveFail'
    } else if (props.saveSuccess === null) {
      return 'null'
    }
  }
  return(
    <div className='save-button-div'>
      <button
        onClick={() => props.saveSubmit()}
        // className={props.saveSuccess ? 'saveSuccess' : 'saveFail' }
        className={saveClass()}      
      >
        SAVE        
      </button>
    </div>
  );  
  
}