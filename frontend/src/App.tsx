import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
