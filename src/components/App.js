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
      // const [search, setSearch] = useState(false);
      
      
      
      const [{longitude, latitude}, setLocalPosition] = useState(geoPosition)
      let mounted = true;
      
      useEffect(() => {
        
        
          navigator.geolocation.getCurrentPosition(handlePosition);
          console.log(longitude)
    
      }, [])

      

      const handlePosition = async (event) => {
        
          
          setLocalPosition({
            longitude : event.coords.longitude,
            latitude : event.coords.latitude,
            
          })
          console.log(event.coords.longitude)
          
          
            const response = await axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${event.coords.latitude}&lon=${event.coords.longitude}&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`);
            setData(response.data.routes)
            console.log(response.data)
        
            addMarker();
            console.log(markers)
      }

    const [data, setData] = useState([]);  
    const  [hasError, setErrors] =  useState(false);


    // let [markers, setMarkers] = useState ([{
    //   itemCoor: [40.7137,-3.9183],
    //   itemName:'Putifero',
    //   itemUrl:'https://www.mountainproject.com/route/107627464/putifero'}])
      
      
    let [markers, setMarkers] = useState ([])
    
    
      const [isLoading, setIsLoading] = useState(true)
      const [hidden, setHidden] = useState(true);

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

      
        setIsLoading(false);
     
      
    
      // const loading = () =>{
      //   if (markers.length>1){ setIsLoading(false);
      //     console.log(isLoading)} }
      
    
      //   loading();
    
    }
    

    // const data = RoutesObj;
      
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.4165001&lon=-3.7025599&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721');
    //     setData(response.data.routes)
    //     console.log(response.data)
    //   }
        
    //   fetchData();
    // }, []);

    const getClosest = async() => {
      const response = await axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${latitude}&lon=${longitude}&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`);
        setData(response.data.routes);
        console.log(response.data)
      }
    
      
    console.log(data);
      
     


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
        // search = {search}
        getClosest={getClosest}
        markers={markers}
        hidden={hidden}
        isLoading={isLoading}
        />
        : <div><p>Wait</p></div>
      }
        </div>
      
        )
      }
      
      export default AppFunction;