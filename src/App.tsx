import React, { createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Edit from "./Edit/Edit";
import View from "./Home/View";
import User from "./User/User";
import Payment from "./component/Paymentpage/Payment";
import Paymethods from "./component/Paymethods/Paymethods";
import Carddetails from "./component/Carddetails/Carddetails";
import Paymentsuccess from "./component/paymentsuccess/Paymentsuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/" element={<User />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/:id" element={<View />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymethods" element={<Paymethods />} />
        <Route path="/carddetails/:id" element={<Carddetails />} />
        <Route path="/Paymentsuccess" element={<Paymentsuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
