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

function App() {


  // let history  = useNavigate();
  return (
    
     <Router>
        <Routes>
          <Route exact path="/" element={<DashBoard/>}></Route>
          <Route path="/centralgovtPortal" element={<CentralGovernment/>}></Route>
          <Route exact path="/centralgovtPortal/job" element={<Job/>}></Route>
          <Route path="/stategovtportal" element={<StateGovernment/>}></Route>
          <Route exact path="/stategovtportal/job" element={<StateJob/>}></Route>
          <Route path="/privatePortal" element={<Corporate/>}></Route>
          <Route exact path="/privatePortal/job" element={<OnlyJob/>}></Route> 
         </Routes>
     </Router> 
    
  );
}

export default App;
