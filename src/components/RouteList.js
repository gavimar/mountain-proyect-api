
import React, { useState, useEffect } from 'react';
import Route from './Route'

const RouteList = (props) => {

 
  const [data, setData] = useState(({ hits: [] }));
  const  [hasError, setErrors] =  useState(false);

  useEffect (() =>{
    fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
    .then(res => res.json())
    .then(data => setData(data.routes))
    .catch(() => setErrors(true));
    console.log("hola");

}, []);



return(
  <ul>
    {/* <div>{JSON.stringify(data)}</div>; */}
    
  {data.hits&&data.hits.map((routeObj) =>
  
  <Route
  key = {routeObj.id}
  title = {routeObj.name}
  photo = {routeObj.img.Small}
  url = {routeObj.url}
 
  
  /> 
  
  )} 
  </ul>
  );
}







export default RouteList;