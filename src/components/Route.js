import React from 'react';


const Route = (props) => {
    

    const handleCoor = (evt) =>{
        let target = evt.currentTarget;
        props.handleCoor(target)
        console.log(evt.currentTarget)
        
    }
    
    return (
        <div>
        <li className="route" id={props.key} onClick={handleCoor} >
        <a href={props.url}>{props.name}</a>
            <img src={props.photo} alt={props.name} />
            
        </li>
        </div>
        );
}

        
        
        export default Route;