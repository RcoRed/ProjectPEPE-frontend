import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ApiRecipe from './api'

function App() {

  ApiRecipe();
  return (
    <div className="App">
      <Header />
      <main>

      </main>
      <footer>

      </footer>


    </div>
  )
}

export default App
