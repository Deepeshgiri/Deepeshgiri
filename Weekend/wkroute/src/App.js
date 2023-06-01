
import './App.css';
// import { Contact } from './pages/Contact';

// import { About } from './pages/About';

// import { Blog } from './pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { NavBare } from './pages/NavBare';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import Product from './pages/Product';
import Jeans from './Component/Jeans';
import Shirt from './Component/Shirt';
import User1 from './Component/Users/User1';
import User2 from './Component/Users/User2';
import UserDetails from './Component/Users/UserDetails';
import Users from './Component/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBare></NavBare>
        <Routes>
          {/* <Route path = "/" element={<Home/>}/> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}>
            <Route path='alluser' element={<Users />}>
              <Route path='user/:id' element={<UserDetails />}></Route>
            </Route>
          </Route>


          <Route path='/blogs' element={<Blog />} />
          <Route path='/product' element={<Product />}>
            <Route index element={<Shirt />} />
            <Route path='jeans' element={<Jeans />} />
            <Route path='shirts' element={<Shirt />} />
          </Route>


        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
