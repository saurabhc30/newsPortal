import './App.css';
import React ,{useState} from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () =>{
  const pageSize = 6;

  const [progress, setProgess] = useState(0);

    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News setProgess={setProgess} key="general" pageSize={pageSize} counrty="in" category="general"/>}/>
            <Route exact path="/business" element={<News setProgess={setProgess} key="business" pageSize={pageSize} counrty="in" category="business"/>}/>
            <Route exact path="/business" element={<News setProgess={setProgess} key="business" pageSize={pageSize} counrty="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgess={setProgess} key="entertainment" pageSize={pageSize} counrty="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgess={setProgess} key="general" pageSize={pageSize} counrty="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgess={setProgess} key="health" pageSize={pageSize} counrty="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgess={setProgess} key="science" pageSize={pageSize} counrty="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgess={setProgess} key="sports" pageSize={pageSize} counrty="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgess={setProgess} key="technology" pageSize={pageSize} counrty="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}
export default App
