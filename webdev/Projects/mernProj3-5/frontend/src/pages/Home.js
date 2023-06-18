import React from 'react'
import Layout from '../componets/Layout'
import { useAuth } from '../context/auth'
import { json } from 'react-router-dom'

function Home() {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      <h1>Home</h1>
      </Layout>
  )
}

export default Home