import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import hook useHitory from react router dom
const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post("http://127.0.0.1:8000/api/login", {
                email: email,
                password: password,
            })
            .then(function (response) {
                localStorage.setItem("token", response.data.token);

                //redirect to dashboard
                navigate("/dashboard");
            })
            .catch(function (error) {
                //assign error to state "validation"
                setValidation(error.response.data);
            });
    };

    return (
        <div className="py-10 px-5">
            <p className="mb-5 font-bold">Login</p>
            {validation.message && (
                <div className="alert alert-error">{validation.message}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className={`mb-2 input input-bordered ${
                            validation.email && "input-error"
                        } w-full max-w-xs`}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        value={email}
                        name="email"
                    />
                    <br />
                    {validation.email && (
                        <span className="">{validation.email}</span>
                    )}
                </div>

                <div>
                    <input
                        type="password"
                        className={`mb-2 input input-bordered ${
                            validation.password && "input-error"
                        } w-full max-w-xs`}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        value={password}
                        name="password"
                    />
                    <br />
                    {validation.password && (
                        <span className="">{validation.password}</span>
                    )}
                </div>

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Register;
