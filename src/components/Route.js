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
    <   h1>{props.name}</h1>
            <img src={props.photo} alt={props.name} />
            <a href={props.url}>Url</a>
        </li>
        </div>
        );
}

        
        
        export default Route;