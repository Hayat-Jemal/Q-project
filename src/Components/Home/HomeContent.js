import React from 'react'
import {HashLink as Link} from "react-router-hash-link"

import "./homeContent.css"
function HomeContent(props) {
  return (
    <div className='homeContent'>
        <h1>{props.hint}</h1>
        <p className='title'>{props.title}</p>
        <p className='description'>{props.description}</p>
        {/* <Link to={props.href}>
            <p className='link'>{props.button}</p>
        </Link> */}
        <Link to={props.href}>{props.button}
        </Link>
       {/* <a href={props.href}>{props.button}</a> */}
    </div>
  )
}

export default HomeContent