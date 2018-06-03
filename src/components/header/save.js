import React from 'react'


export default function Save(props){




    return(
      <div className='save-button-div'>
        <button onClick={() => props.saveSubmit()}>SAVE</button>
      </div>
    );
  
}