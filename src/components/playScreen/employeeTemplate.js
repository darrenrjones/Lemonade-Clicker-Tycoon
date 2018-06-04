import React from 'react'
// import BuyEmployeeButton from './buyEmployeeButton'

export default function employeeTemplate(props){


  return(
    <div className='employee-menu-container'>

      <div>
        <h2>{props.empTypeName}</h2>
        <p> {props.empTypeName} sell {props.currentClickValue} lemonade{props.rate > 1 ? 's': null} every {props.rate} second{props.rate > 1 ? 's': null}</p>
      </div>
      
      <div className='buy-button-div'>
          <button onClick={() => props.purchaseAutoClickers()}>Buy</button>
          <span className='buy-button-span'>${props.currentPurchaseCost.toLocaleString('en')}</span>
      </div>
  
  </div>
  );
}

