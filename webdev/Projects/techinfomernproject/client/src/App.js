import {Routes, Route} from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Policy } from './pages/Policy';
import { Contact } from './pages/Contact';
import { PageNotFound } from './pages/PageNotFound';


function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    
      
    </>
  );
}

export default App;
