import React from 'react'

export default function EmployeeTemplate(props){


  return(
    <div className='employee-menu-container'>

      <div className='asset-upgrade-display'>
        <h2 id='aria-{props.empTypeName}'>{props.empTypeName}</h2>
        <p> {props.empTypeName} sell {props.currentClickValue} lemonade{props.rate > 1 ? 's': null} every {props.rate} second{props.rate > 1 ? 's': null}</p>
      </div>
      
      <div className='buy-button-div'>
        <button onClick={() => props.purchaseAutoClickers()}>Buy</button>
        <span className='buy-button-span' aria-labelledby='aria-{props.empTypeName}'>${props.currentPurchaseCost.toLocaleString('en')}</span>
      </div>
  
    </div>
  );
}

