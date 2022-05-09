import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AutoMobileList from "./pages/AutoMobileList"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="list" element={<AutoMobileList />}/>
      </Routes>
    </div>
  );
}

export default App;
