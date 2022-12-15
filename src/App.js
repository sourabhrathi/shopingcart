import React,{useState} from 'react'
import './App.css'
// import Transdata from './component/Transdata'
import Transfer from './component/Transfer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Dashboard from './component/Dashboard'
import Cart from './component/Cart'
 function App() {
 const [toggle, settoggle] = useState(true)
 const [mode , setmode]=useState(true)

const handletoggle=()=>{
  settoggle(!toggle)
}

const handleMode=()=>{
  setmode(!mode)
}
  return (
    <>
    <Router>
      <div className='d-flex'>
      <Sidebar toggle={toggle} handletoggle={handletoggle} />
      <div className={toggle?'d-flex-header':'d-flex-header-1'}>
      <Header mode={mode} handleMode={handleMode} toggle={toggle} handletoggle={handletoggle}/>
      <Routes>
        <Route path="/" element={<Dashboard mode={mode} />}/>
        <Route path="/transfer/:id" element={<Transfer mode={mode}/>}/>  
        <Route path="/cart" element={<Cart/>}/>  
      </Routes>
      </div>
      </div>
    </Router>
  
    </>
  )
}
export default App;