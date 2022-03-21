//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//css
import '../styles/Home.css';
import '../styles/Age.css';

//logo
import Logo from '../assets/logo.png'

//icons
import { HiOutlineMenu } from 'react-icons/hi'

//pages
import ErrorPage from './ErrorPage'
import Home from './Home'
import GeneratedQuestionary from './GeneratedQuestionary';
import LastPage from './LastPage';

function App() {
  return (
    <Router>
      <div className="header">
        <img className="logo" src={Logo} alt="logo" />
        <div className="menu-button">
          <HiOutlineMenu size={30} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generated-questionary" element={<GeneratedQuestionary />} />
        <Route path="/last-page" element={<LastPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App


