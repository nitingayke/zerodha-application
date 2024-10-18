import AppleIcon from '@mui/icons-material/Apple';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Setup.css";

export default function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-right",
        });
        
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            handleError("Email is required.");
            return;
        }
        if (!password) {
            handleError("Password is required.");
            return;
        }
        
        try {
            const { data } = await axios.post("http://localhost:9920/login", { ...inputValue }, { withCredentials: true });
            const { success, message } = data;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    // navigate("/dashboard");
                    window.location.href = "http://localhost:3000/dashboard";
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            handleError("An error occurred while logging in.");
        }

        setInputValue({
            email: "",
            password: "",
        });
    };

    return (
        <>
            <div className='mt-5 pt-5 text-center mx-auto login-box'>
                <form className='login-buttons' onSubmit={handleSubmit}>
                    <img src="/assets/kite-logo.svg" alt="" height={40} className='mt-4' />
                    <h3 className='fw-medium p-3 my-3 fs-5'>Login to Kite</h3>

                    <input 
                        type="text" 
                        value={email} 
                        name="email" 
                        onChange={handleOnChange} 
                        className='col-12 login-input-box mb-3 p-2' 
                        placeholder='Enter your email' 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        name="password" 
                        onChange={handleOnChange} 
                        className='col-12 login-input-box mb-3 p-2' 
                        placeholder='Enter your password' 
                    />
                    <button type="submit" className='col-12 border-0 p-1 my-3'>Login</button>
                </form>

                <div className='mt-4'>
                    <span className='mx-2'><img src="/assets/android.svg" alt="" /></span>
                    <span className='mx-2 text-secondary'><AppleIcon /></span>
                </div>
                <br />
                <Link to={"/"} className='text-secondary d-flex align-items-center justify-content-center my-2'>
                    <img src="/assets/zerodhaicon.png" alt="" height={17} className="me-2" />
                    <span className='fw-semibold signup-redirect-link fs-6'>ZERODHA</span>
                </Link>
            
                <Link to={"/signup"} className='fs-14 redirect-link'>Don't have an account? Signup now!</Link>
                
                <p className='fs-12 text-secondary'>
                    Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart Online Dispute Resolution | SEBI SCORES v3.0.0
                </p>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
