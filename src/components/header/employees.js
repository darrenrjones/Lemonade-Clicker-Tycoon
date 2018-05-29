import React from 'react'

export default function Employees(props){


    return(
      <div className='employee-container'>
        <div>{props.empTypeName}</div>
        <div>count: {props.empCount}</div>       
      </div>
    );
  
}