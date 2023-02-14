import React from 'react'
import "./clients.css"
import ClientsLogo from './ClientsLogo'
function Clients() {
  return (
    <div className='clientsContainer'>
        <div className='clientsTitlewrapper'>
            <h1>We Have Multiple Clients </h1>
            <h2>Across Verticals Who Look to Us to Deliver Best-in-class Industry Solutions.</h2>
        </div>
      <ClientsLogo />

    </div>
  )
}

export default Clients