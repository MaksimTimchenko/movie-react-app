import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css'
import MovieDescription from "./components/pages/MovieDescription/MovieDescription";

import MainPage from "./components/pages/MainPage";
import MoviesList from "./components/pages/MoviesList";

function App() {

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}> </Route>
          <Route path="/:type/:movieId" element={<MovieDescription/>}/>
          <Route path="/:category" element={<MoviesList/>}/>
        </Routes>
      </div>
    </Router>
   
  )
}

export default App
