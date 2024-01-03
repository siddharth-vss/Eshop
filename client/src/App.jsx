import {BrowserRouter , Routes , Route} from 'react-router-dom'

import { Sharedlayout,Login,Register } from "./pages";
// import Stats from "./pages/dash/stats";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}  />
            <Route path='/register' element={<Register/>}  />
             <Route path='/dashboard' element={<Sharedlayout/>} >
                <Route index element={<h1>DashBoard</h1>}  />
                <Route path='orders' element={<h1>Oders</h1>} />
                <Route path='notes' element={<h1>notes</h1>}  />
                <Route path='tracking' element={<h1>Tracker</h1>}  />
                <Route path='customers' element={<h1>Customers</h1>}  />
                <Route path='deals' element={<h1>Deals</h1>}  />
                <Route path='sells' element={<h1>Sells</h1>} />
                <Route path='bill' element={<h1>Bills</h1>} />
                <Route path='invoice' element={<h1>Invoice</h1>} />
                <Route path='data' element={<h1>Data</h1>} />
             </Route>
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
