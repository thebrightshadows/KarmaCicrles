
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingpage/landingpage';
import Login from './components/loginpage/login';
import HomePage from './components/homepage/homepage';
import Profile from './components/profile/profile';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>} ></Route>
          <Route path='/signin' element={<Login></Login>}></Route>
          <Route path='/homepage' element={<HomePage></HomePage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>


        </Routes>
      </Router>




    </div>
  );
}

export default App;
