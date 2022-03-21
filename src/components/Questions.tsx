import React from 'react'
import '../styles/QuestionPage.css'
import Answer from './Answer'
import { useNavigate } from 'react-router-dom'

interface Questions {
  question: string
  answer: number
  answerOne: string
  answerOneEmoji: any
  answerTwo: string
  answerTwoEmoji: any
  answerThree: string
  answerThreeEmoji: any
}

const Question = ({ question, answer, answerOne, answerOneEmoji, answerTwo, answerTwoEmoji, answerThree, answerThreeEmoji }: Questions) => {

  const navigate = useNavigate()

  if (answer === 3) {
    return (
      <div className="all-question">
        <div className="question-title">{question}</div>
        <Answer emoji={answerOneEmoji} answer={answerOne} click={() => { navigate('/last-page') }} />
        <Answer emoji={answerTwoEmoji} answer={answerTwo} click={() => { navigate('/last-page') }} />
        <Answer emoji={answerThreeEmoji} answer={answerThree} click={() => { navigate('/last-page') }} />
      </div>
    )
  } else return null
}

export default Question