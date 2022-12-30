import logo from "./logo.svg";
import "./App.css";
//import bootstrap CSS
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="App h-screen text-white ">
            <p>Belajar React.js di SantriKoding</p>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
