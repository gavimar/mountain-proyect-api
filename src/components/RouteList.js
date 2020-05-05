
import React, { useState, useEffect } from 'react';
import Route from './Route';
import MyMap from './MyMap';
import RoutesObj from '../data/RoutesObj';
import Loader from './Loader';


const RouteList = (props) => {

  console.log(props.longitude)
  console.log(props.latitude)
 
  

  const [hidden, setHidden] = useState(true);

  // const data = RoutesObj; //eliminar lineas
  // console.log(data)

 

let [markers, setMarkers] = useState ([{
  itemCoor: [40.7137,-3.9183],
  itemName:'Putifero',
  itemUrl:'https://www.mountainproject.com/route/107627464/putifero'}])
  console.log(markers)


const  addMarker = () => {

  setHidden(false)
  
  for (let route of props.data){
    let itemInfo ={
      itemCoor: [route.latitude, route.longitude],
      itemName: route.name,
      itemUrl:route.url

    }
    markers.push(itemInfo)
    setMarkers(markers)
  } 

  const loading = () =>{
    if (markers.length>1){ setIsLoading(false) }}

    loading();

}

const handleButton = () =>{
  props.getClosest();
  
  console.log(props.getClosest());

  setHiddenButton(false)

  // const  addMarker = async() => {
  // const result = await props.getClosest().resolve;

    
  //   result.then(()=>{
    
  //   for (let route of props.data){
  //     let itemInfo ={
  //       itemCoor: [route.latitude, route.longitude],
  //       itemName: route.name,
  //       itemUrl:route.url
  
  //     }
  //     markers.push(itemInfo)
  //     setMarkers(markers)
  //   } })
     
  // }

  // addMarker();

  
 
}

const [isLoading, setIsLoading] = useState(true)
const [hiddenButton, setHiddenButton] = useState(true)




return(

  <div className="search-container">
    <div className= "map-container">
    <button type="button" className="button" onClick={handleButton}>Get your closest routes</button>
    <button type="button" className={`button ${hiddenButton === true ? "hidden" : ""}`} onClick={addMarker}>Check routes on a map</button>
    {/* <div className="mapid"></div> */}
    <div className ="MyMap">
    {/* { markers.length>1 ?  */}
    {isLoading === false?
    <MyMap
    latitude = {props.latitude}
    longitude = {props.longitude}
    data = {props.data}
    markers = {markers}
    
    ></MyMap> : <Loader hidden = {hidden}/> }
    </div>

    </div>
    
  <div className="list-container">
  {/* <button onClick = {getClosest}>Fetchclosest</button> */}
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