import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './screens/Home'
import Splash from "./screens/Splash"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Splash />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
    </Router>
  );
}


export default App;
