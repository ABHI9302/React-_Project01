import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Footer from './Components/HomePage/Footer'
const App = () => {
  return (
    <main className='w-full  px-[10%]'>
      <Header/>
      <Home/>
      <Footer/>
    </main>
  )
}

export default App