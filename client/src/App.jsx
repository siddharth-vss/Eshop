import {BrowserRouter , Routes , Route} from 'react-router-dom'

import { Dashboard,Login,Register } from "./pages";
import Stats from "./pages/dash/stats";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}  />
            <Route path='/register' element={<Register/>}  />
             <Route path='/dashboard' element={<Dashboard/>} >
                <Route path='orders' element={<h1>Hello</h1>}  />
                <Route path='notes' element={<h1>Hello</h1>}  />
                <Route path='tracking' element={<h1>Hello</h1>}  />
                <Route path='customers' element={<h1>Hello</h1>}  />
                <Route path='deals' element={<h1>Hello</h1>}  />
                <Route path='sells' element={<h1>Hello</h1>} />
                <Route path='bill' element={<h1>Hello</h1>} />
                <Route path='invoice' element={<h1>Hello</h1>} />
                <Route path='data' element={<h1>Hello</h1>} />
             </Route>
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
