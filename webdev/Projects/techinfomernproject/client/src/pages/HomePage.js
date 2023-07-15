import React from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'

export const HomePage = () => {

  const [Auth,setAuth]= useAuth()

  return (
    <Layout title={"best offers"}>
        <h1>Homepage</h1>
        <pre>{JSON.stringify(Auth,null,4)}</pre>
        
    </Layout>
  )
}
