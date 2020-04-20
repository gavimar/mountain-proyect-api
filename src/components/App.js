import React,{useState, useEffect} from 'react';
import RouteList from './RouteList';


const geoPosition = {
  longitude: null,
  latitude: null,
  speed : null
}

const AppFunction = () => {

 
  
  const [{longitude, latitude, speed}, setLocalPosition] = useState(geoPosition)
 let mounted = true;

  useEffect(() => {
    
    
    navigator.geolocation.getCurrentPosition(handlePosition);
   const geoID = navigator.geolocation.watchPosition(handlePosition);

    return () => {
     
      navigator.geolocation.clearWatch(geoID);
      mounted = false;
    }

  }, [])



  const handlePosition = event => {
    if(mounted){
      setLocalPosition({
      longitude : event.coords.longitude,
      latitude : event.coords.latitude,
    })
    }
 
  }


 



  return(
    <div>

<h2>Geo location</h2>
<p className="longitude">Longitude : {longitude}</p>
<p className="latitude">Latitude : {latitude}</p>
<p className="speed">Speed : {speed ? speed : '0'}</p>
<RouteList
latitude = {latitude}
longitude = {longitude}/>
</div>
  )
}

export default AppFunction;