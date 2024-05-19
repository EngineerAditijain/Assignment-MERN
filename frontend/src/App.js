
import './App.css';
import React from 'react';
import Header from './components/Header';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from '../src/components/About';
import AddUser from './components/AddUser';
import Users from './components/User/Users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateUser from './components/User/updateUser';

function App() {
  return<React.Fragment>
    <header>
      <Header/>
      </header>
      <main style={{overflow:"auto"}}> 
        <Routes>
          <Route path="/add" element={<AddUser/>} exact/>
          <Route path="/" element={<Users/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/updateuser/:id" element={<UpdateUser/>} exact/>
        </Routes>
        <ToastContainer/>
      </main>
      </React.Fragment>;
}

export default App;
