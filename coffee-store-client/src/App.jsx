import { useContext } from 'react'
import './App.css'
import Banner from './Components/HomesComponents/Banner'
import Category from './Components/HomesComponents/Category'
import Items from './Components/HomesComponents/Items'
import { AuthContext } from './AuthProvider'

function App() {

  const {name} = useContext(AuthContext)

  return (
    <>
      
      {/* banner section */}
      <Banner></Banner>
      <h1>{name}</h1>
      {/* category section */}
      <Category></Category>
      {/* Items Section */}
      <Items></Items>
    </>
  )
}

export default App
