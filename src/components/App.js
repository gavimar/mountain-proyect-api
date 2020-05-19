    import React,{useState, useEffect} from 'react';
    import RouteList from './RouteList';
    import '../stylesheets/App.scss';
    import axios from "axios";
  
    const geoPosition = {
      longitude: null,
      latitude: null
    }

    const AppFunction = () => {

        const [data, setData] = useState([]);  
        const  [hasError, setErrors] =  useState(false);
 
        const [{longitude, latitude}, setLocalPosition] = useState(geoPosition)

        // const [hidden, setHidden] = useState(true);
        // const [isLoading, setIsLoading] = useState(true)
      
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
          
        }

        console.log(data);

        
        const markers = data.map(route =>  ({
            itemCoor: [route.latitude, route.longitude],
            itemName: route.name,
            itemUrl:route.url
        }) )


        console.log(markers)
    
    
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
                        markers={markers}
                    />
                    : <div><p>Wait</p></div>
                }
        </div>
        )
      }
      
    export default AppFunction;