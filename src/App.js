import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import DashboardComponent from './components/DashboardComponent'
import CarDetailComponent from './components/CarDetailComponent'
import PaymentComponent from './components/PaymentComponent'
import { useSelector } from 'react-redux'

import React from 'react'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import AdminComponent from './components/admin/AdminComponent';
import AdminListComponent from './components/admin/AdminListComponent';
import AdminAddComponent from './components/admin/AdminAddComponent';
import AdminUpdateComponent from './components/admin/AdminUpdateComponent';
import PaymentDetailComponent from './components/PaymentDetailComponent';
import InvoiceComponent from './components/InvoiceComponent';

function App() {

  const currentUser = useSelector(state => state.users.users)

  const RequireAuth = ({ children }) => {
    return currentUser !== null ? children : <Navigate to='/login' />
  }

  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/' element={<RequireAuth><DashboardComponent /></RequireAuth>} />
        <Route path='/admin' element={<RequireAuth><AdminComponent /></RequireAuth>} />
        <Route path='/admin/list' element={<RequireAuth><AdminListComponent /></RequireAuth>} />
        <Route path='/admin/add' element={<RequireAuth><AdminAddComponent /></RequireAuth>} />
        <Route path='/admin/update/:carId' element={<RequireAuth><AdminUpdateComponent /></RequireAuth>} />
        <Route path='/car-detail/:id' element={<RequireAuth><CarDetailComponent /></RequireAuth>} />
        <Route path='/payment/' element={<RequireAuth><PaymentComponent /></RequireAuth>} />
        <Route path='/payment/detail' element={<RequireAuth><PaymentDetailComponent /></RequireAuth>} />
        <Route path='/payment/invoice' element={<RequireAuth><InvoiceComponent /></RequireAuth>} />
      </Routes>

    </div>
  );
}

export default App;
