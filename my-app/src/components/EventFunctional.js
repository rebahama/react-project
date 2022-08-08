import React from 'react'

function EventFunctional() {
    
    const clickHandler =()=> console.log("Clicked the functional button")
    
    
    
    return (
        <div>

            <button onClick={clickHandler}> Click me Functional event </button>
        </div>
    )
}

export default EventFunctional