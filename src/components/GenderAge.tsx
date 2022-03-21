import '../styles/Gender.css'

import { AiOutlineRight } from 'react-icons/ai'

interface GenderAge {
  image: any
  age: string
  onClick: any
}

const GenderAge = ({ image, age, onClick }: GenderAge) => {
  return (
    <div className='container' onClick={onClick}>

      <img src={image} className='image' />
      <div className="footer">
        {/* <div>select</div> */}
        <div className="flex-direction-column">
          <div className="age">Age:</div>
          <div className="age-between">{age}</div>
        </div>
        <div className="icon">
          <AiOutlineRight size={20} />
        </div>
      </div>
    </div>
  )
}

export default GenderAge