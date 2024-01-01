import {BrowserRouter , Routes , Route} from 'react-router-dom'

import { Dashboard,Login,Register } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}  />
            <Route path='/dashboard' element={<Dashboard/>}  />
            <Route path='/register' element={<Register/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
