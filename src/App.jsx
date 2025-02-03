import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BelowHeader from './components/BelowHeader'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-black dark:text-gray-300 min-h-screen'>
    <Header />
    <BelowHeader />
    <Content />
    <Footer />
    <div className="flex justify-center items-center p-4 text-center">
      <p className="text-gray-400">
        Designed and Developed by{" "}
        <a
          href="https://x.com/ayushrtwt" 
          className="hover:text-red-600 transition-colors duration-200 underline decoration-red-600 hover:decoration-red-600"
        >
          Ayush
        </a>
        .
      </p>
    </div>
    </div>
  )
}

export default App
