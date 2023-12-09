import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import './App.css'
import TabSection from './Components/TabSection'
import ProductList from './Components/ProductList'

function App() {
 

  return (
    <>
    <div>
    <div className="flex justify-end">
      <Sidebar />
      <TabSection />
    </div>
    
    <ProductList />
    </div>
   
    </>
  )
}

export default App
