import React, { useState } from 'react'
import '../styles/QuestionPage.css'
import { Progress } from 'reactstrap'

import { AiOutlineArrowLeft } from 'react-icons/ai'

//Questions 
import Question from '../components/Questions'

//navigation
import { useNavigate } from 'react-router-dom'

//questionOneImages
import OneOne from '../assets/questions/first-question/muscle.png'
import OneTwo from '../assets/questions/first-question/two.png'
import OneThree from '../assets/questions/first-question/three.png'

const GeneratedQuestionary = () => {

  const [question, setQuestion] = useState(1)

  const navigate = useNavigate()

  return (
    <div className="question-page">
      <header className='header-question'>
        <Progress
          animated
          color="success"
          value={question / 17 * 100}
          style={{ borderRadius: 10, height: 5 }}
        />
        <div className='flex-direction-row'>
          <AiOutlineArrowLeft size={20} onClick={() => navigate('/')} />
          <div className='flex-direction-state'>
            <div className="question-number">{question}</div>
            <div>/17</div>
          </div>
        </div>
      </header>

      <main className="question">
        <Question question="What is a primary goal for you?" answer={3} answerOne="Lose Weight" answerOneEmoji={OneOne}
          answerTwo="Get fit" answerTwoEmoji={OneTwo} answerThree="Gain muscle" answerThreeEmoji={OneThree} />
      </main>


    </div>
  )
}

export default GeneratedQuestionary