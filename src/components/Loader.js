import React from 'react';


const Loader = (props) => {
  return(
    <div className={`loader ${props.hidden === true ? "hidden" : ""}`}>
      <h2>Please wait</h2>
      <p>A map is loading but it might take a few seconds.</p>
    </div>
  )
}

export default Loader;