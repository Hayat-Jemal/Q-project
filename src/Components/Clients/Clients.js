import React from 'react'
import "./clients.css"
import ClientsLogo from './ClientsLogo'
function Clients() {
  return (
    <div className='clientsContainer'>
        <div className='clientsTitlewrapper'>
            <h1>We Have Multiple Clients </h1>
            <p>Across Verticals Who Look to Us to Deliver Best-in-class Industry Solutions.</p>
        </div>
      <ClientsLogo />

    </div>
  )
}

export default Clients