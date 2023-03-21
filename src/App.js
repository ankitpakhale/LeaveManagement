import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Assets/css/style.css";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

import Index from "./Component/Index";
import Login from "./Component/Login";

import Accountstatus from "./Component/Accountstatus";
import Add_employee from "./Component/Add_employee";
import All_leave from "./Component/All_leave";
import Apply_leave from "./Component/Apply_leave";
import Manage_employee from "./Component/Manage_employee";
import Profile from "./Component/Profile";
import Showemplyee from "./Component/Showemplyee";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/accountstatus" exact element={<Accountstatus />} />
          <Route path="/add_employee" exact element={<Add_employee />} />
          <Route path="/all_leave" exact element={<All_leave />} />
          <Route path="/apply_leave" exact element={<Apply_leave />} />
          <Route path="/" exact element={<Index />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/manage_employee" exact element={<Manage_employee />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/showemplyee" exact element={<Showemplyee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
