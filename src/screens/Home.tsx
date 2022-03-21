import '../styles/Home.css';
import { useState } from 'react'

//images
import GenderMale from '../assets/home-page/gender-male.png'
import GenderFemale from '../assets/home-page/gender-female.png'
import Purple from '../assets/female-gender-age-page/purple-woman.png'
import Pink from '../assets/female-gender-age-page/pink-woman.png'
import Blue from '../assets/female-gender-age-page/blue-woman.png'
import Teen from '../assets/male-gender-age-page/teen.png'
import Adult from '../assets/male-gender-age-page/adult.png'
import Old from '../assets/male-gender-age-page/old.png'

//router
import { useNavigate } from 'react-router-dom'

//components
import Gender from '../components/Gender';
import GenderAge from '../components/GenderAge'

function Home() {

  const [page, setPage] = useState(0)

  let navigate = useNavigate();
  // () => {navigate('/about')}

  if (page === 0) {
    return (
      <div className="app">

        <main className="main">
          <div className="subtitle">TAKE 1-MINUTE QUIZ</div>
          <div className="title">KETO DIET</div>
          <div className="softtitle">according to your age and BMI</div>

          <div className="select-your-gender">Select your gender</div>

          <div className="genders">
            <Gender onClick={() => setPage(curr => curr + 1)} image={GenderMale} gender="male" />
            <Gender onClick={() => setPage(curr => curr + 2)} image={GenderFemale} gender="female" />
          </div>
        </main>

      </div>
    )
  } else if (page === 1) {
    return (
      <div className='app'>
        <div className='keto-diet'>KETO DIET</div>

        <div className='according-to-age'>
          <div className='according-to'>ACCORDING TO YOUR</div>
          <div className='age-title'>AGE</div>
        </div>

        <div className='one-minute-quiz'>
          <div className='one-minute'>1-MINUTE</div>
          <div className="quiz">QUIZ</div>
        </div>

        <div className='gender-ages'>
          <GenderAge onClick={() => navigate('generated-questionary')} image={Teen} age="18-29" />
          <GenderAge onClick={() => navigate('generated-questionary')} image={Adult} age="30-39" />
          <GenderAge onClick={() => navigate('generated-questionary')} image={Old} age="40+" />
        </div>


      </div>
    )
  } else if (page === 2) {
    return (
      <div className='app'>
        <div className='keto-diet'>KETO DIET</div>

        <div className='according-to-age'>
          <div className='according-to'>ACCORDING TO YOUR</div>
          <div className='age-title'>AGE</div>
        </div>

        <div className='one-minute-quiz'>
          <div className='one-minute'>1-MINUTE</div>
          <div className="quiz">QUIZ</div>
        </div>

        <div className='gender-ages'>
          <GenderAge onClick={() => navigate('generated-questionary')} image={Purple} age="18-29" />
          <GenderAge onClick={() => navigate('generated-questionary')} image={Pink} age="30-39" />
          <GenderAge onClick={() => navigate('generated-questionary')} image={Blue} age="40+" />
        </div>


      </div>
    )
  } else return null

}

export default Home;