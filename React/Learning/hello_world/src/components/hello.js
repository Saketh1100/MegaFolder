import React from 'react';

const Hello=(props)=>{
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.hero}
      </h1>
      {
        props.children
      }
    </div>

  )

  
}

export default Hello;