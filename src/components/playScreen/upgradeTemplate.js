import React from 'react'

export default function UpgradeTemplate(props){


  return(
    <div className='upgrade-menu-container'>

      <div>
        <h2>{props.upgradeTypeName}</h2>
        <p> {props.description}</p>
      </div>
      
      <div className='buy-upgrade-button-div'>
          <button onClick={() => props.purchaseAutoClickers()}>Buy</button>
          <span className='buy-upgrade-button-span'>$examplecost</span>
      </div>
  
  </div>
  );
}

