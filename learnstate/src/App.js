import React, { useState } from 'react'
import Counter from './Counter';
export default function App() {
  //let name = ' '
  const [name, setName] = useState('Shabaj')

  const handleclick = ()=>{
    //name = 'Akash';
    //alert(name);
    setName('Akash');
  }
  return (
   <div>
    {/*<h3>Hello {name}</h3>
    <button onClick={handleclick}>Click</button>*/}
   
   <Counter />
   </div>
  );
}

