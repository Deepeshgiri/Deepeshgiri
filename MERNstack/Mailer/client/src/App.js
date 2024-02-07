import Testgraph from './scenes/Graph/Testgraph';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import {colorModeContext , useMode} from './theme'
import { CssBaseline,ThemeProvider } from '@mui/material';
import {Routes, Route} from 'react-router-dom'


function App() {
  const [theme , colorMode] = useMode()

  return (
    <colorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className='content'>
          <Topbar/>
          <Routes>
            
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/test' element={<Testgraph/>}/>
          </Routes>
          
          </main>
          
      
    </div>
      </ThemeProvider>
    </colorModeContext.Provider>
    
  );
}

export default App;
