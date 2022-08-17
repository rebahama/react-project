import React, {useState} from 'react'

function AddNumber() {
  const [boxOne, setResult]=useState('');
  const [boxTwo, setResultTwo]=useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    
 
}
const addNums=()=>{
    let adding = parseInt(boxOne) + parseInt(boxTwo)
    console.log(adding)
    
}
const adding = parseInt(boxOne) + parseInt(boxTwo)
  
  
return (
    <div>
       <form onSubmit={handleSubmit}>
        <p> Add number below</p>
        <input onChange={(e)=> setResult(e.target.value)}
        value={boxOne}
        /> 
        +
        <input onChange={(e)=> setResultTwo(e.target.value)}
        value={boxTwo}
        /> 
        
       <p>= {adding}</p>
<div>
<button onClick={addNums} type="submit" > Calculate</button>
</div>
       </form>


    </div>
  )
}

export default AddNumber