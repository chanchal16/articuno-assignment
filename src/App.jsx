import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'

function App() {
  const initialValue = {
    name:'',email:'',password:''
  }
  const [userData,setUserData] = useState(JSON.parse(localStorage.getItem('user')) || initialValue)

  return (
    <div className="App">
      <Navbar user={userData}/>
      <Cart userData={userData} setUserData={setUserData}/>
    </div>
  )
}

export default App
