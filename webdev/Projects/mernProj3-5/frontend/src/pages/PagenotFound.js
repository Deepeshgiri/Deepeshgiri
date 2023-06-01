import React from 'react'
import Layout from '../componets/Layout'

function PagenotFound() {
  return (
    <Layout>
      <div className='text-center mt-10 '><h1>404</h1></div>
      <div className='text-center mt-10'><h1>Page not Found</h1></div>
      <div className='text-center '><h3>We could not find what you were looking for.
Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</h3></div>
      </Layout>
  )
}

export default PagenotFound