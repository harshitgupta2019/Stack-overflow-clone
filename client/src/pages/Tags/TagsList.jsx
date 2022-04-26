import React from 'react'
import './Tags.css'
import { Link } from 'react-router-dom'
const TagsList = ({ tag }) => {
    return (
        <div className='tag'>
            
            <Link to={`/Questions/tagged/${tag.tagName}`}><h5>{tag.tagName}</h5></Link>
            <p>{tag.tagDesc}</p>
        </div>
    )
}

export default TagsList