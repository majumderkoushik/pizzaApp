import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'
import TabSection from '../TabSection'
import ProductList from '../ProductList'

function Home() {
  return (
    <div>
    <div className='flex justify-around'>
    <Sidebar />
    <TabSection />
    </div>
    <ProductList />
    </div>
  )
}

export default Home