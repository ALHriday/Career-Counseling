
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
// import Cards from './components/Cards/Cards'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <div>
        <h1 className='text-4xl font-bold p-6'>Counselor Information: </h1>
        <Cards></Cards>
      </div> */}
      <Footer></Footer>
    </div>
  )
}

export default App
