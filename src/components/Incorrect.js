import React from 'react'
import './Incorrect.css'
function Incorrect() {
    return (
        <div className = 'incorrect'> 
            <h3> <i class="fas fa-times"></i> Incorrect <i class="fas fa-times"></i></h3>
            <p>Please try again <i class="far fa-smile"></i> </p>
        </div>
    )
}

export default Incorrect;