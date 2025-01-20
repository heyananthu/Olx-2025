import './App.css';
import UserLogin from './Components/User/UserLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserHome from './Components/User/UserPages/UserHome/UserHome';
import SellFirstPage from './Components/User/UserPages/SellPages/FirstPage';
import Car from './Components/User/UserPages/SellPages/Car';
function App() {
  return (
    <BrowserRouter>
      <div className='bg-white'>
        <Routes>
          <Route path='/' element={<UserHome />} />
          <Route path='/sellfirst' element={<SellFirstPage/>}  />
          <Route path='/car' element={<Car/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
