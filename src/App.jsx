import './App.css'
import About from './components/about/About'
import Book from './components/book/Book'
import Estimate from './components/estimate/Estimate'
import Faq from './components/faq/Faq'
import Features from './components/features/Features'

function App() {
  return (
    <div className="app">
      <About/>
      <Estimate/>
      <Features/>
      <Book/>
      <Faq/>
    </div>
  )
}

export default App
