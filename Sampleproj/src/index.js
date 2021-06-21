import React from 'react'
import ReactDOM from 'react-dom'
import Samplecl from './Sampleclass'

function Func1()
{
  return(
    <div>
    <h1>Automatic count updater</h1>
    <h2><Samplecl/></h2>
    </div>
  )
}

ReactDOM.render(<Func1/>,document.getElementById('root'));