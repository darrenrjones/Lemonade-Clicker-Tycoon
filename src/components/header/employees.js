import React from 'react'

export default function Employees(props){

    return(
      <div className='employee-container'>
        <div id='aria-empTypeName'>{props.empTypeName}</div> 
        <div aria-labelledby='aria-empTypeName'>count: {props.empCount}</div>       
      </div>
    );
  
}
