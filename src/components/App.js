    import React,{useState, useEffect} from 'react';
    import RouteList from './RouteList';
    import '../stylesheets/App.scss';
    import axios from "axios";
    import RoutesObj from '../data/RoutesObj';
  


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

    const [data, setData] = useState([]);  
    const  [hasError, setErrors] =  useState(false);

    

    // const data = RoutesObj;
      
    useEffect(() => {
      const fetchData = async () => {
      const response = await axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.4165001&lon=-3.7025599&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721');
        setData(response.data.routes)
        console.log(response.data)
      }
        
      fetchData();
    }, []);

    const getClosest = async() => {
      const response = await axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${latitude}&lon=${longitude}&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`);
        setData(response.data.routes);
        console.log(response.data)
      }
    
      
    console.log(data);
      
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
        
      </header>
      {data!==[]?
            
        <RouteList
        data = {data}
        latitude = {latitude}
        longitude = {longitude}
        search = {search}
        getClosest={getClosest}/>
        : <div><p>Wait</p></div>
      }
        </div>
      
        )
      }
      
      export default AppFunction;