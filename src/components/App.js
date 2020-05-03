  import React,{useState, useEffect} from 'react';
  import RouteList from './RouteList';
  import '../stylesheets/App.scss';
 


  const geoPosition = {
    longitude: null,
    latitude: null,
    speed : null
  }

  

  const AppFunction = () => {
    const [search, setSearch] = useState(false);
    
    
    
    const [{longitude, latitude}, setLocalPosition] = useState(geoPosition)
    let mounted = true;

    const [data, setData] = useState([]);  // eliminar Api
  const  [hasError, setErrors] =  useState(false);
    
    useEffect(() => {
      
      
      navigator.geolocation.getCurrentPosition(handlePosition);
      const geoID = navigator.geolocation.watchPosition(handlePosition);

          fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=-3&lon=42&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
         
          .then(res => res.json())
          .then(data => setData(data.routes))
          .catch(() => setErrors(true));
          console.log(data);
          // addMarker();
      
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
      <div className ="wrapper">
      <header className="header">
      <h1>Climb Around</h1>
      {/* <button type="button" className="closestButton" onClick={getClosest}>Get closest</button> */}
    </header>
      
      {/* <h2>Geo location</h2>
      <p className="longitude">Longitude : {longitude}</p>
      <p className="latitude">Latitude : {latitude}</p>  */}
      
      <RouteList
      latitude = {latitude}
      longitude = {longitude}
      search = {search}/>
      </div>
      )
    }
    
    export default AppFunction;