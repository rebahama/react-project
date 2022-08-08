import React from 'react'
//  if pros.connected is true render the string "connected" else render "not connected"
function ConditionalRenderingFunctional(props) {
  return (
    <div>
        
        <h1>{props.connected ? 'Connected': 'Not connected'}</h1>

    </div>
  )
}

export default ConditionalRenderingFunctional