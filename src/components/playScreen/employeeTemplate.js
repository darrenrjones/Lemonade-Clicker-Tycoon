import React from 'react'

export default function employeeTemplate(props){


  return(
    <div className='employee-menu-container'>
      <h2>{props.empTypeName}</h2>
      <p> {props.empTypeName} sell {props.currentClickValue} lemonades/second</p>
      <form>
          <button>BUY</button>
          <span>${props.currentPurchaseCost}</span>
      </form>
  
  </div>
  );
}

