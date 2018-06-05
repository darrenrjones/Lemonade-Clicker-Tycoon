import React from 'react'

export default function UpgradeTemplate(props){

  let boughtStatus;
  if(!props.bought){
    boughtStatus = (
      <div className='buy-upgrade-button-div'>
          <button onClick={() => props.purchaseUpgrade()}>Buy</button>
          <span className='buy-upgrade-button-span'>${props.cost.toLocaleString('en')}</span>
      </div>
    )
  } else {
    boughtStatus = (
      <div className='buy-upgrade-button-div'>
          <span className='buy-upgrade-button-span'>Purchased</span>
      </div>
    )
  }

  return(
    <div className='upgrade-menu-container'>

      <div className='upgrade-description-div'>
        <h2>{props.upgradeTypeName}</h2>
        <p> {props.description}</p>
      </div>
      
      {boughtStatus}
  
  </div>
  );
}

