import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Viewmyappointment from './components/appointments/Viewmyappointment';
import Booknewappointment from './components/appointments/Booknewappointment';
import Composemessage from './components/messages/Composemessage';
import Inbox from './components/messages/Inbox';
import Sentmessage from './components/messages/Sentmessage';
import Previousappointments from './components/appointments/Previousappointments';
import Myaccount from './components/settings/Myaccount';
import Myprofile from './components/settings/Myprofile';
import Invoice from './components/billing/Invoice';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Viewmyappointment/>}></Route>
          <Route path='previousappointments' element={<Previousappointments/>}></Route>
          <Route path='booknewappointment' element={<Booknewappointment/>}></Route>
          <Route path='composemessage' element={<Composemessage/>}></Route>
          <Route path='inbox' element={<Inbox/>}></Route>
          <Route path='sentmessage' element={<Sentmessage/>}></Route>
          <Route path='changepassword' element={<Myaccount/>}></Route>
          <Route path='editprofile' element={<Myprofile/>}></Route>
          <Route path='invoice' element={<Invoice/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
