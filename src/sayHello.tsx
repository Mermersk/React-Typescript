import React from "react"

const SayHello: React.FC = () => {

    const alertHello = () => {
        alert("kisamuna")
      }
    
    return(

    <div>
      <h3>sayHello component, I have an h3 and a button</h3>
      <button onClick = {alertHello}>Hello?</button>
    </div>

    )
}

export default SayHello;