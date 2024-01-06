import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import CreateOrderPage from "./pages/CreateOrder"
import OrdersPage from "./pages/Orders"
import NotFoundPage from "./pages/NotFound"

function App() {

  return (
    <div className="flex flex-col items-center">
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create-order' element={<CreateOrderPage/>}></Route>
        <Route path='/orders' element={<OrdersPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
