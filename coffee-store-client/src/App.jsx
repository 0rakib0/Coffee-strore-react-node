import './App.css'
import Banner from './Components/HomesComponents/Banner'
import Category from './Components/HomesComponents/Category'
import Items from './Components/HomesComponents/Items'

function App() {

  return (
    <>
      <div className="md:w-[1920] bg-[url('https://i.ibb.co/T4h8nBw/Rectangle-1.png')] flex items-center justify-center">
        <img src="https://i.ibb.co/cgfxJKH/logo1-1.png" alt="" />
        <h4 className='text-white text-4xl md:text-6xl font-Rancho'>Espresso Emporium</h4>
      </div>
      {/* banner section */}
      <Banner></Banner>
      {/* category section */}
      <Category></Category>
      {/* Items Section */}
      <Items></Items>
    </>
  )
}

export default App
