import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'


function App() {
  
  return (
    
      <main className='min-h-[78vh]'>
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
      
  )
}

export default App