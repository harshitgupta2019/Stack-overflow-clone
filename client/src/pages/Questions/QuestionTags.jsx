import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import TaggedQuestion from '../../components/HomeMainbar/TaggedQuestion'
const QuestionTags = () => {
  return (
    
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <TaggedQuestion/>
                <RightSidebar />
            </div>
        </div>
    
  )
}

export default QuestionTags
