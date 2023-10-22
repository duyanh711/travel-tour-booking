import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
