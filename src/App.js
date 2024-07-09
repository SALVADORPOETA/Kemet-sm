import Footer from './components/Footer'
import HomeContainer from './routes/home/HomeContainer'
import Hero from './routes/home/Hero'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="bg-[var(--primary-beige)] h-full">
      <Navbar />
      <Hero />
      <HomeContainer />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
