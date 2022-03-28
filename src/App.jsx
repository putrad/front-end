import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card'
import ShowTabel from './components/ShowTabel'
import Nav from './components/Nav'



function App() {
  const [count, setcount] = useState(0)
  return (

    <div>

      <Nav />
      <hr />
      <Header />
      <hr />
      <Card/>

      <hr />
      <div></div>
      



      <hr />
      <Footer />


    </div>
  )
}



export default App
