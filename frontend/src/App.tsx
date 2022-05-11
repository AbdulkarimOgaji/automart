import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AutoMobileList from "./pages/AutoMobileList"
import { Routes, Route } from 'react-router-dom';
import Detail from "./pages/Detail";
import DashBoard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateAsset from "./pages/CreateAsset";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="list" element={<AutoMobileList />}/>
        <Route path="detail/:automobile_id" element={<Detail />}/>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="create" element={<CreateAsset />} />
      </Routes>
    </div>
  );
}

export default App;
