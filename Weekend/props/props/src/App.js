import logo from './logo.svg';
import './App.css';
import A from './Components/A';
import {createContext } from 'react';
const dname = createContext()
const dsname = createContext()

function App() {

  const name="deepesh"
  const sname ="Kumar"

  return (
    <div className="App">
      <header className="App-header" >
        
        <dname.Provider value={name}>
        <A/>
        </dname.Provider>
       
      </header>
    </div>
  );
}
export{dname}
export default App;
