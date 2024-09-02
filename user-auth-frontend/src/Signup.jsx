// @ts-nocheck
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import './Signup.css'; // Assuming you will create a CSS file for custom styles

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => {
                setError('Registration failed. Please try again.');
                console.log(err);
            });
    };

    return (
        <div className="signup-container">
            <motion.div
                className="signup-form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center mb-4">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger mb-3">{error}</div>}
                    <div className="form-group mb-3">
                        <label htmlFor="name">
                            <FaUser className="form-icon" />
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            id="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">
                            <FaEnvelope className="form-icon" />
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            id="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">
                            <FaLock className="form-icon" />
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login" className="link-text">Login</Link>
                </p>
            </motion.div>
        </div>
    );
}

export default Signup;
