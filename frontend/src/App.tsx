import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AutoMobileList from "./pages/AutoMobileList"
import { Routes, Route } from 'react-router-dom';
import Detail from "./pages/Detail";
import DashBoard from "./pages/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="list" element={<AutoMobileList />}/>
        <Route path="detail/:automobile_id" element={<Detail />}/>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="accounts/:id" element={<DashBoard />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
