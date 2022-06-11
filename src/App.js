import DashBoard from "./dashBoard/dashboard";
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import CentralGovernment from "./governmentportal/central";
import Corporate from "./corporateportal/corporate";
import StateGovernment from "./governmentportal/state";
import Job from "./governmentportal/job";
import StateJob from "./governmentportal/stateJob"
import { useEffect } from 'react';
import { axios } from "axios";
import OnlyJob from "./corporateportal/onlyJob/onlyJob.js"
import Govt from "./governmentmain/govt.js"
import Excel from "./Admin/excelUpload"


function App() {


  // let history  = useNavigate();
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/" element={<DashBoard/>}></Route>
          <Route exact path="/governmentportal" element={<Govt/>}></Route>
          <Route exact path="/centralgovtPortal" element={<CentralGovernment/>}></Route>

          <Route path="/centralgovtPortal/:id" element={<Job/>}></Route>

          <Route exact path="/stategovtportal" element={<StateGovernment/>}></Route>
          
          <Route path="/stategovtportal/:id" element={<StateJob/>}></Route> 

          <Route exact path="/privatePortal" element={<Corporate/>}></Route>
          
          <Route path="/privatePortal/:id" element={<OnlyJob/>}></Route>

          <Route path="/excelUpload/Admin" element={<Excel/>}></Route>

          </Routes>
     </Router> 
     </>
    
  );
}

export default App;
