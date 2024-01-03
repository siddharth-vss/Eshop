import {BrowserRouter , Routes , Route} from 'react-router-dom'

import { Sharedlayout,Login,Register } from "./pages";
import { Stats,Orders ,Bill,Customers,Data,Deals,Invoice,Notes,Sells } from "./pages/dash";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}  />
            <Route path='/register' element={<Register/>}  />
             <Route path='/dashboard' element={<Sharedlayout/>} >
                <Route index element={<Stats/>}  />
                <Route path='orders' element={<Orders/>} />
                <Route path='notes' element={<Notes/>}  />
                <Route path='tracking' element={<h1>Tracker</h1>}  />
                <Route path='customers' element={<Customers/>}  />
                <Route path='deals' element={<Deals/>}  />
                <Route path='sells' element={<Sells/>} />
                <Route path='bill' element={<Bill/>} />
                <Route path='invoice' element={<Invoice/>} />
                <Route path='data' element={<Data/>} />
             </Route>
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
