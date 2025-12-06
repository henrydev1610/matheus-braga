import Services from './Components/Services'
import Hero from './Components/Hero'
import About from './Components/About'
import Partners from './Components/Partners'
import Transform from './Components/Transform'
const page = () => {
  return (
    <div className='overflow-x-hidden'>    
      <Hero/>
      <About/>
      <Services/>
      <Transform/>
      <Partners/>
    </div>
  )
}
// https://victorcaetano.tech/
export default page
