import React from 'react'
import { useResult } from '../Hooks/UseContext' 

const Result = () => {
  const { sgpa, cgpa } = useResult();
  return (
    <div>
        <h1>Result:</h1>
        <h2>SGPA:{sgpa}</h2>
        <h2>CGPA:{cgpa}</h2>
    </div>
  )
}

export default Result