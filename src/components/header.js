import React from 'react';


const Route = (props) => {
  return(
    <header className="header">
      <h1>Rock climbing routes finder</h1>
      <button type="button" className="closestButton" onClick={props.getClosest}>Get closest</button>
    </header>
  )
}