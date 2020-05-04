  import React,{useState, useEffect} from 'react';
  import RouteList from './RouteList';
  import '../stylesheets/App.scss';
  import axios from "axios";
 


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

    const [data, setData] = useState([]);  // eliminar Api
  const  [hasError, setErrors] =  useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=36.7569945&lon=-3.5237027&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721');
      setData(response.data.routes);
      console.log(response.data)
    }
      
    fetchData();
  }, []);

  //   useEffect (()=>{
  //     // fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${props.latitude}&lon=${props.longitude}&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
  //     fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=-3.9183&lon=40.7137&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
  //     .then(res => res.json())
  //     .then(response => setData(response.routes))
  //     .catch(() => setErrors(true));
      
  //     // addMarker();
  
  // }, [])
    
  console.log(data);
    
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
    {data!==[]?
            
      <RouteList
      data = {data}
      latitude = {latitude}
      longitude = {longitude}
      search = {search}/>
      : <div><p>Wait</p></div>
    }
      </div>
    
      )
    }
    
    export default AppFunction;