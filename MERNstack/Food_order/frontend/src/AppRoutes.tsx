 import {Routes , Route, Navigate} from 'react-router-dom'
import Layout from './layouts/layout'
import HomePage from './Pages/HomePage'

 const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Layout><HomePage/></Layout>}/>
            <Route path='/Profile' element={<span>USer profile Page</span>}/>


            <Route path='*' element = {<Navigate to={'/'}/>}></Route>
        </Routes>
    )
 }

 export default AppRoutes