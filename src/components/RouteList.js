
import React, { useState, useEffect } from 'react';
import Route from './Route';
import MyMap from './MyMap';
import RoutesObj from '../data/RoutesObj';
import Loader from './Loader';
import axios from 'axios';


const RouteList = (props) => {

  console.log(props.longitude)
  console.log(props.latitude)
 
  const [data, setData] = useState([]);  // eliminar Api
  const  [hasError, setErrors] =  useState(false);

  const [hidden, setHidden] = useState(true);

  // const data = RoutesObj; //eliminar lineas
  // console.log(data)

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${props.latitude}&lon=${props.longitude}&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`),
      );
 
      setData(result.routes);
    };
 
    fetchData();
  }, []);

//   const getClosest =() =>{
//     // fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=36.756960299999996&lon=-3.5237079&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
   
//     .then(res => res.json())
//     .then(data => setData(data.routes))
//     .catch(() => setErrors(true));
//     console.log(data);
//     // addMarker();

// }

let [markers, setMarkers] = useState ([{
  itemCoor: [40.7137,-3.9183],
  itemName:'Putifero',
  itemUrl:'https://www.mountainproject.com/route/107627464/putifero'}])
  console.log(markers)


const  addMarker = () => {

  setHidden(false)
  
  for (let route of data){
    let itemInfo ={
      itemCoor: [route.latitude, route.longitude],
      itemName: route.name,
      itemUrl:route.url

    }
    markers.push(itemInfo)
    setMarkers(markers)
  } 
}




return(

  <div className="search-container">
    <div className= "map-container">
   <button type="button" onClick={addMarker}>Locate routes</button>
    {/* <div className="mapid"></div> */}
    <div className ="MyMap">
    { markers.length>1 ? <MyMap
    latitude = {props.latitude}
    longitude = {props.longitude}
    data = {data}
    markers = {markers}
    
    ></MyMap> : <Loader hidden = {hidden}/> }
    </div>

    </div>
    
  <div className="list-container">
  {/* <button onClick = {getClosest}>Fetchclosest</button> */}
  <ul>
    
   
    
  {data&&data.map((routeObj) => 
  
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