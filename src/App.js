import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom'
import Create from './componnents/Create/Create';
import Detail from './componnents/Detail/Detail';
import Edit from './componnents/Edit/Edit';
import Listing from './componnents/Listing/Listing';

function App() {
  return (
    <div className="App bg-danger py-5 px-5">
      <h1 className='text-white py-1'>Crud Operations</h1>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Listing/>}></Route>
            <Route path='/employee/create' element={< Create/>}></Route>
            <Route path='/employee/detail:empid' element={<Detail />}></Route>
            <Route path='/employee/edit:empid' element={<Edit />}></Route>
          </Routes>
        </HashRouter>
    </div>
  );
}
export default App;

