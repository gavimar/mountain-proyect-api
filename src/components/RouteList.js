
import React, { useState, useEffect } from 'react';
import Route from './Route';
import MyMap from './MyMap';


const RouteList = (props) => {

  console.log(props.longitude)
  console.log(props.latitude)
 
  const [data, setData] = useState([]);
  const  [hasError, setErrors] =  useState(false);

  const getClosest =() =>{
    // fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.4045524&lon=-3.6458579&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
    fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${props.latitude}&lon=${props.longitude}&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
    .then(res => res.json())
    .then(data => setData(data.routes))
    .catch(() => setErrors(true));
    console.log(data);
    

}
let [markers, setMarkers] = useState ([[40.404306399999996,-3.6521948]])
console.log(markers)



const  addMarker = () => {
  
  getCoor();
  for (let item of routesCoor)
  markers.push(item)
  setMarkers(markers)
  console.log(routesCoor)
  console.log(markers)
}

const [routesCoor, setCoor] = useState([]);

const getCoor = () => {
  for (let route of data){
    routesCoor.push([route.latitude, route.longitude])
    setCoor(routesCoor)
  } return routesCoor;
  
}



return(

  <div className="search-container">
    <button type="button" onClick={addMarker}>Locate routes</button>
    <div className="mapid"></div>
    <div className ="MyMap">
    { markers.length>1 ? <MyMap
    latitude = {props.latitude}
    longitude = {props.longitude}
    data = {data}
    markers = {markers}
    
    ></MyMap> : '' }
    </div>
    
  
  <ul>
    <button onClick = {getClosest}>Fetchclosest</button>
   
    
  {data&&data.map((routeObj) => 
  
   <Route
   key = {routeObj.id}
   title = {routeObj.name}
   photo = {routeObj.imgSmall}
   url = {routeObj.url}
   name = {routeObj.name}
   routeLat = {routeObj.latitude}
   routeLong = {routeObj.longitude}
   
  
  /> 
  
  )} 
  </ul>
  </div>
  );
}







export default RouteList;