import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import toast, {Toaster} from 'react-hot-toast';


function App() {
  
  return (
    <>
    <Header/>
      <main className='h-[78vh]'>
        <Outlet/>
      </main>
      <Footer/>
      <Toaster/>
    </>
      
  )
}

export default App