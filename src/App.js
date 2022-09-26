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
import Training from "./screens/Training";
import ChallengeList from "./screens/ChallengeList";
import Article from "./screens/Article";
import Page from "./screens/Page";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Splash />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/training/course=:course" exact element={<Training />} />
          <Route path="/challenges/name=:name" exact element={<ChallengeList />} />
          <Route path="/article/id=:id" exact element={<Article />} />
          <Route path="/page/name=:name" exact element={<Page />} />
        </Routes>
    </Router>
  );
}


export default App;
