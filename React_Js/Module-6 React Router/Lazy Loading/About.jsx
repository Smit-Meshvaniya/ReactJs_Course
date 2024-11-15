import React, { useState } from 'react'

const About = () => {

    let [count,setCount] = useState(0);

    for(let i=0;i<100000000;i++){
        count+=i;
    }

  return (
    <div>
        <h2>About Page</h2>
        <h2>Count - {count}</h2>
    </div>
  )
}

export default About