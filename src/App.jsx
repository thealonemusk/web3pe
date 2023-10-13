import { useState } from 'react'
import { Navbar, Welcome, Footer, Transactions } from './components'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="bg-gray-900">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}
export default App
