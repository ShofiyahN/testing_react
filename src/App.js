import logo from './logo.svg';
import './App.css';
import AppBarsLogin from './component/AppBars/AppBarsLogin';
import { Route, Routes } from 'react-router-dom';
import AppBarsRegis from './component/AppBars/AppBarsRegis';
import AppBarsHome from './component/AppBars/AppBarsHome';
import TestPage from './component/AppBars/TestPage';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<AppBarsRegis/>}/>
        <Route path='/login' element={<AppBarsLogin/>}/>
        <Route path='/home' element={<AppBarsHome/>}/>
      </Routes>
    
  );
}

export default App;
