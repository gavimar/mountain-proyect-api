
import React, { useState, useEffect } from 'react';
import Route from './Route';
import MyMap from './MyMap';
import Loader from './Loader';


const RouteList = (props) => {

    console.log(props.longitude)
    console.log(props.latitude)



// const renderMap = () => {
//   setIsLoading(false);
// }

    return(

      <div className="search-container">

          <div className= "map-container">
              <button type="button" className="button" onClick={props.addMarker}>Check routes on a map</button>
              {/* <button type="button" className="button" onClick={renderMap}>Render map</button> */}
              <div className ="MyMap">
                  {/* {props.isLoading === false&& props.markers.length!=0? */}
                  {props.markers.length!=0? 
                      <MyMap
                          latitude = {props.latitude}
                          longitude = {props.longitude}
                          data = {props.data}
                          markers = {props.markers}
                      >
                      </MyMap> : <Loader hidden = {props.hidden}/> 
                  }
              </div>
          </div>
          
        <div className="list-container">
            <p>The following routes are within a maximum of 160km from you.</p>
          
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