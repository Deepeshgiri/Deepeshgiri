import {Routes, Route} from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Policy } from './pages/Policy';
import { Contact } from './pages/Contact';
import { PageNotFound } from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Test from './Test';
import { Login } from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';



function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
      {/* <Route path ='/testt'element={<Test/>}/> */}
      <Route path = '/login' element={<Login/>}/>
    </Routes>
    
      
    </>
  );
}

export default App;
