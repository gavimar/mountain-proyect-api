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

    
    
    // const getClosest =() =>{
    //   setSearch(!search);
    // }

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