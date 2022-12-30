import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    //token
    const token = localStorage.getItem("token");

    const fetchData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.get("http://127.0.0.1:8000/api/user").then((response) => {
            setUser(response.data);
        });
    };

    const handleLogout = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.post("http://localhost:8000/api/logout").then(() => {
            localStorage.removeItem("token");
            navigate("/");
        });
    };

    useEffect(() => {
        if (!token) {
            navigate("/");
        }

        fetchData();
    }, []);
    console.log(user);
    return (
        <div>
            <div className="text-sky-600 flex justify-between">
                <p>anda berhasil login</p>
                <button onClick={handleLogout} className="btn btn-sm btn-error">
                    Logout
                </button>
            </div>

            <div>{user.email}</div>
        </div>
    );
};

export default Dashboard;
