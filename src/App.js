import Footer from './components/Footer'
import Egypt from './components/Egypt'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="bg-[var(--primary-beige)] h-full">
      <Navbar />
      <Hero />
      <Egypt />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
