import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate();
    //define state validation
    const [validation, setValidation] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://127.0.0.1:8000/api/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
            })
            .then(function (response) {
                console.log(response);
                navigate("/");
            })
            .catch(function (error) {
                //assign error to state "validation"
                setValidation(error.response.data);
                console.log(validation);
            });
    };

    return (
        <div className="py-10 px-5">
            <p className="mb-5 font-bold">Register</p>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input
                        type="text"
                        className={`mb-2 input input-bordered ${
                            validation.name && "input-error"
                        } w-full max-w-xs`}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        value={name}
                        name="name"
                    />
                    <br />
                    {validation.name && (
                        <span className="">{validation.name}</span>
                    )}
                </div>
                <br />
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
                <div>
                    <input
                        type="password"
                        className={`mb-2 input input-bordered ${
                            validation.password && "input-error"
                        } w-full max-w-xs`}
                        onChange={(e) =>
                            setPasswordConfirmation(e.target.value)
                        }
                        placeholder="password confirmation"
                        value={passwordConfirmation}
                        name="password_confirmation"
                    />
                    <br />
                    {validation.password && (
                        <span className="">{validation.password}</span>
                    )}
                </div>

                <button className="btn btn-primary">registerasi</button>
            </form>
        </div>
    );
};

export default Register;
