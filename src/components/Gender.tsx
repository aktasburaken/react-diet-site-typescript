import '../styles/Gender.css'

interface Gender {
  image: any
  gender: string
  onClick: any
}

const Gender = ({ image, gender, onClick }: Gender) => {
  return (
    <div className='container' onClick={onClick}>
      <img src={image} className='image' />
      <div className="footer">
        {/* <div>select</div> */}
        <div className="gender">{gender}</div>
      </div>
    </div>
  )
}

export default Gender