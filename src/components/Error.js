import React from 'react'
import './Error.css'
function Error() {
    return (
        <div className = 'error'> 
            <h3> <i class="fas fa-exclamation-triangle"></i> Error fetching random lyrics <i class="fas fa-exclamation-triangle"></i></h3>
            <p>Please try generating again <i class="far fa-smile"></i> </p>
        </div>
    )
}

export default Error;