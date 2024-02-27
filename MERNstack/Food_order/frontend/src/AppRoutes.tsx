 import {Routes , Route, Navigate} from 'react-router-dom'
import Layout from './layouts/layout'

 const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Layout>Home Page</Layout>}/>
            <Route path='/Profile' element={<span>USer profile Page</span>}/>


            <Route path='*' element = {<Navigate to={'/'}/>}></Route>
        </Routes>
    )
 }

 export default AppRoutes