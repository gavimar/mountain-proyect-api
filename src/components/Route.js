import React from 'react';


const Route = (props) => {
    const handleShowInfo = (event) =>{
        
        let target = event.currentTarget
        props.handleShowInfo(target)
    console.log(event.currentTarget)
    }
    
    return (
        <div>
        <li className="route" id={props.key} >
    <   h1>{props.name}</h1>
            <img src={props.photo} alt={props.name} />
            <a href={props.url}>Url</a>
        </li>
        </div>
        );
}

        
        
        export default Route;