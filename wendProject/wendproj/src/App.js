
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import { Navbarr } from './component/Navbarr';
import Users from './pages/Users';
import Update from './pages/Update';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbarr/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/Update' element={<Update/>}/>
              <Route path= '/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
