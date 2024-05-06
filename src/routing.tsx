import {FunctionComponent} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import MainPage from './pages/memePages/mainPage';
import Privacy from './pages/memePages/privacy';
import UserContext from './context';

const Routing: FunctionComponent = () => {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="*" element={<Outlet />} />
      </Routes>
    </UserContext>
  )
}

export default Routing
