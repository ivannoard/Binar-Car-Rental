import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import DashboardComponent from './components/DashboardComponent'
import CarDetailComponent from './components/CarDetailComponent'
import PaymentComponent from './components/PaymentComponent'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setCars, fetchCars } from './redux/actions/carActions'
import React, { useEffect, useState } from 'react'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    dispatch(fetchCars())
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [])
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={user !== null ? <DashboardComponent /> : <Navigate to='/login' />} />
        <Route path='/login' element={user === null ? <LoginComponent /> : <Navigate to='/' />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/car-detail/:id' element={<CarDetailComponent />} />
        <Route path='/payment/' element={<PaymentComponent />} />
      </Routes>

    </div>
  );
}

export default App;
