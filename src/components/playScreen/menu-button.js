import React from 'react';

export default function menuButton(props){
    

  return (
    <button className='menu-button' onClick={() => props.handleMenuClick()}>MENU</button>
  )
}