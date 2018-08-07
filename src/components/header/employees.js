import React from 'react'

export default function Employees(props){

    return(
      <div>
        <div className='asset-header-display asset-header' id='aria-empTypeName'>{props.empTypeName}</div> 
        <div className='asset-header-count asset-header' aria-labelledby='aria-empTypeName'>{props.empCount}</div>       
      </div>
    );
  
}
