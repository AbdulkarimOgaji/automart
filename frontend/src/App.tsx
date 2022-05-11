import NavBar from "./components/NavBar";
import {
  HomePage,
  AutoMobileList,
  Detail,
  DashBoard,
  Register,
  Profile,
  Login,
  CreateAsset,
} from "./pages";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="list" element={<AutoMobileList />} />
        <Route path="detail/:automobile_id" element={<Detail />} />
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
