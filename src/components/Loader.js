import React from 'react';
import loading from '../images/loading2.gif'


const Loader = (props) => {
    return(
        <div className="loader">
            <img src={loading}></img>
        </div>
    )
}

export default Loader;