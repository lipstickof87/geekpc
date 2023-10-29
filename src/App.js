import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthRoute } from './components/AuthRoute';
import Login from '@/pages/Login'
import MyLayout from '@/pages/MyLayout'
import { Home, Publish, Article } from './pages';
import { HistoryRouter,history } from './utils/history';

function App() {
  return (
    <HistoryRouter>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={
          <AuthRoute>
               <MyLayout />
          </AuthRoute>
          } >
            {/* 二级路由默认页面 */}
            <Route index element={<Home></Home>}></Route>
            <Route path="article" element={<Article></Article>
            }></Route>
            <Route path="publish" element={<Publish></Publish>}></Route>
          </Route>
          
          <Route path='/login' element={<Login/>} />

        </Routes>
      </div>
    </BrowserRouter>
  
    </HistoryRouter>
    
  );
}

export default App;
