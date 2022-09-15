import React, { Children, createContext } from "react";
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
import Childrens from "./component/children/Childrens";
import Language from "./component/Language";
import Phonepay from "./component/Phonepay";
import Googlepay from "./component/Googlepay";
import Otpcode from "./component/otpcode/Otpcode";
import Shows from "./component/Shows/Shows";

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
        <Route path="/children" element={<Childrens />} />
        <Route path="/language" element={<Language />} />
        <Route path="/phonepay/:id" element={<Phonepay />} />
        <Route path="/googlepay/:id" element={<Googlepay />} />
        <Route path="/otpcode" element={<Otpcode />} />
        <Route path="/shows" element={<Shows/>}/>
      </Routes>
    </Router>
  );
}

export default App;
