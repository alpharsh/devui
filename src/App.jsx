import './App.css'
import Card from './component/Card'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Product from './component/Product'
import Signin from './component/Signin'
import Footer from './component/Footer'
import Team from './component/Team'
import Landing from './component/Landing'
import Testimonial from './component/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Hero />
      <Product />
      <Signin />
      <Team userName="Harsh Tripathi" role="Full Stack Developer" />
      <Testimonial />
      <Footer />
      {/* <h1 className='bg-green-400 rounded-2xl p-4 mb-4'>Hello React</h1> */}
      {/* <Card /> */}
    </>
  )
}

export default App
