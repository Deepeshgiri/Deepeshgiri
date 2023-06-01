import { Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PagenotFound from "./pages/PagenotFound";
import Register from "./pages/Auth/Register";



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/About' element= {<About/>}></Route>
      <Route path='/Contact' element= {<Contact/>}></Route>
      <Route path='/Policy' element= {<Policy/>}></Route>
      <Route path='*' element= {<PagenotFound/>}></Route>
      <Route path ='/Register' element={<Register/>}></Route>

    </Routes>
    </>
  );
}

export default App;
