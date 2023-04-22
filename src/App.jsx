import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ApiRecipe from './api'
import Card from './components/card'


function App() {

  ApiRecipe();
  return (
    <div className="App">
      <Header />
      <main>
        <Card />

      </main>
      <footer>

      </footer>


    </div>
  )
}

export default App
