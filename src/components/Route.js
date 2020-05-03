import React from 'react';
import imageNotFound from '../images/imageNotFound.png';



const Route = (props) => {
    

    const handleCoor = (evt) =>{
        let target = evt.currentTarget;
        props.handleCoor(target)
        console.log(evt.currentTarget)
        
    }

    let routePhoto;
    if (props.photo !== ""){
        routePhoto = props.photo;
        
      } else{
        routePhoto = imageNotFound ;
        
      }

      
    
    
    return (
        <div>
        <li className="route" id={props.key} onClick={handleCoor} >
           
        <a href={props.url}>{props.name}</a>
        <img src={routePhoto} alt={props.name} />
        <p>Location: {props.location.join(', ')}</p>
        <p>Difficulty: {props.rating}</p>
    <p>Stars: {props.stars}</p>
    <p>Type: {props.type}</p>
            
            
            
        </li>
        </div>
        );
}

        
        
        export default Route;