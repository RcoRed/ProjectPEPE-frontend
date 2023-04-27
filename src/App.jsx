import './App.css'
import Header from './components/header'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet/> 
        
      </main>
      <footer>

      </footer>


    </div>
  )
}

export default App
