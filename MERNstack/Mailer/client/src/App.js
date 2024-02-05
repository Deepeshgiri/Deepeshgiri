import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import {colorModeContext , useMode} from './theme'
import { CssBaseline,ThemeProvider } from '@mui/material';


function App() {
  const [theme , colorMode] = useMode()

  return (
    <colorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className='content'>
          <Topbar/>
          <Sidebar/>
          </main>
          
      
    </div>
      </ThemeProvider>
    </colorModeContext.Provider>
    
  );
}

export default App;
