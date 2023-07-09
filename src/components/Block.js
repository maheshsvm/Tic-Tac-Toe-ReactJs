import React from 'react'

const Block = ({shapeState , id , shapeMapping , changeState}) => {
  return (
    <div className={`block ${shapeMapping[shapeState[id]]}`} onClick={()=> changeState(id)}>
    </div>
  )
}

export default Block
