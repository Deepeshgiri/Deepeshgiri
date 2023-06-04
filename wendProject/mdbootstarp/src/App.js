
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import { Navbarr } from './component/Navbarr';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <div className='text-center'>
        <img
          className='mb-4'
          src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
          style={{ width: 250, height: 90 }}
        />
        <h5 className='mb-3'>
          Thank you for using our product. We're glad you're with us.
        </h5>
        <p className='mb-3'>MDB Team</p>
        <MDBBtn
          tag='a'
          href='https://mdbootstrap.com/docs/standard/getting-started/'
          target='_blank'
          role='button'
        >
          Start MDB tutorial
        </MDBBtn>
        <div className="App">
        <BrowserRouter>
        <Navbarr/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/registration' element={<Registration/>}/>
          </Routes>
        </BrowserRouter>
    </div>
      </div>
    </div>
  </MDBContainer>
    
  );
}

export default App;
