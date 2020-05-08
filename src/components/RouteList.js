
import React, { useState, useEffect } from 'react';
import Route from './Route';
import MyMap from './MyMap';
import RoutesObj from '../data/RoutesObj';
import Loader from './Loader';


const RouteList = (props) => {

  console.log(props.longitude)
  console.log(props.latitude)
 
  

 

  // const data = RoutesObj; //eliminar lineas
  // console.log(data)

 



const handleButton = async () =>{
  setHiddenButton(false)

  // const tasks = async() =>{
  props.getClosest()
  
  // .then(addMarker());
  
  console.log(props.getClosest());

  

  // const paintMarkers = await tasks;

 
}


const [hiddenButton, setHiddenButton] = useState(true)


return(

  <div className="search-container">
    <div className= "map-container">
      <button type="button" className="button" onClick={handleButton}>Get your closest routes</button>
      {/* <button type="button" className={`button ${hiddenButton === true ? "hidden" : ""}`} onClick={addMarker}>Check routes on a map</button> */}
      <div className ="MyMap">
        {props.isLoading === false&& props.markers.length!=0?
        <MyMap
        latitude = {props.latitude}
        longitude = {props.longitude}
        data = {props.data}
        markers = {props.markers}
        >
        </MyMap> : <Loader hidden = {props.hidden}/> }
      </div>

    </div>
    
  <div className="list-container">
  
    <ul>
      {props.data&&props.data.map((routeObj) => 
  
      <Route
      key = {routeObj.id}
      title = {routeObj.name}
      photo = {routeObj.imgSmall}
      url = {routeObj.url}
      name = {routeObj.name}
      routeLat = {routeObj.latitude}
      routeLong = {routeObj.longitude}
      location = {routeObj.location}
      rating = {routeObj.rating}
      stars = {routeObj.stars}
      type = {routeObj.type}
      /> 
  
      )} 
    </ul>
  </div>

  

  </div>
  );
}







export default RouteList;