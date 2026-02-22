import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import PriceList from './components/PriceList'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './index.css'

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Gallery />
      <PriceList />
      <Contacts />
    </main>
    <Footer />
  </>
)

export default App
