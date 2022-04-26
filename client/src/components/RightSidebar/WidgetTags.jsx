import React from 'react'
import { Link } from 'react-router-dom'
const WidgetTags = () => {
    const tags=['c','css','javascript','express','html','android','c++','ios','mysql','node.js','json','python','firebase','java','reactjs','c++']
  return (
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className="widget-tags-div">
          {
              tags.map((tag)=>(    
                  <Link to={`/Questions/tagged/${tag}`} style={{textDecoration:"none"}}><p key={tag}>{tag}</p></Link>
              ))
          }
      </div>
    </div>
  )
}

export default WidgetTags
