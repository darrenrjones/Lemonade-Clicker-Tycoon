import React from 'react'
// import BuyEmployeeButton from './buyEmployeeButton'

export default function employeeTemplate(props){


  return(
    <div className='employee-menu-container'>
    
      <h2>{props.empTypeName}</h2>
      <p> {props.empTypeName} sell {props.currentClickValue} lemonades/second</p>
      <div>
          <button onClick={() => props.purchaseAutoClickers()}>Buy</button>
          <span>${props.currentPurchaseCost}</span>
    </div>
  
  </div>
  );
}

