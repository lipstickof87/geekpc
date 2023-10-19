
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthRoute } from './components/AuthRoute';
import Login from '@/pages/Login/index.js'
import Layout from '@/pages/Layout'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/layout' element={
          <AuthRoute>
               <Layout />
          </AuthRoute>
           
          } />
          <Route path='/login' element={<Login/>} />

        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
