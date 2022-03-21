import React, { useState } from 'react'

import { AiFillCheckCircle } from 'react-icons/ai'

interface Answers {
  answer: string
  emoji: any
  click: any
}

const Answer = ({ answer, emoji, click }: Answers) => {

  const [isSelected, setIsSelected]: any = useState('non')

  return (
    <div className={isSelected === "selected" ? 'answer-div-selected' : 'answer-div'}
      onClick={() => { isSelected === "selected" ? setIsSelected('non') : setIsSelected('selected'); setTimeout(click, 1000) }}>
      <div className="answer-container-left" >
        <img className="emoji" src={emoji} />
        <div className='answer'>{answer}</div>
      </div>
      <div className="answer-container-right">
        {isSelected === "selected" ? <AiFillCheckCircle size={25} color='green' /> : null}
      </div>
    </div>
  )
}

export default Answer