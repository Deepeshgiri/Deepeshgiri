import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from 'react-helmet'


const Layout = ({children, title, description,keywords,author}) => {
  return (
    <div>
<Helmet>
<meta charset="UTF-8"/>
<title>{title}</title>
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords}/>
  <meta name="author" content="CAP DIST"/>
 
</Helmet>

        <Header/>
        <main style={{minHeight:'80vh'}}>
        {children}
        <ToastContainer/>
        </main>
      
        <Footer/>
    </div>
  )
}
Layout.defaultProps={
  title:"ecmmerce",
  description:"mernstack",
  keywords:" mern, react, this ,that"
}

export default Layout