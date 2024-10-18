import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Setup.css";

export default function Signup() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [isAgree, setIsAgree] = useState(false);

    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleCheckboxChange = () => {
        setIsAgree(!isAgree);
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-right",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        if (!isAgree) {
            handleError("You must agree to the terms.");
            document.querySelector(".isAgree-box").classList.add("alert");
            return;
        }

        if (!email || !password || !username) {
            handleError("All fields are required.");
            return;
        }

        try {
            const { data } = await axios.post(
                "http://localhost:9920/signup",
                { ...inputValue },
                { withCredentials: true }
            );
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
            handleError("Signup failed. Please try again later.");
            console.error(error);
        }
    };

    return (
        <>
            <div>

                <div className='text-center py-5'>
                    <h2 className='signup-header text-muted'>Open a free demat and trading account</h2>
                    <p className='fs-5 text-secondary'>Start investing brokerage free and join a community of 1+ crore investors and traders</p>
                </div>

                <div className='d-flex flex-wrap justify-content-between py-5'>
                    <div className='p-3 col-12 col-md-6'>
                        <img src="/assets/landingsignup.png" alt="" className='img-fluid' />
                    </div>

                    <form className="col-10 col-md-5 p-3 user-login-form mx-auto">
                        <h2 className='fw-semibold fs-2 text-muted'>Signup now</h2>
                        <small className='text-secondary fs-6'>Or track your existing application</small>
                        <br /><br />

                        <div className='login-input-box'>
                            <span className="border-end px-2 py-1"><i className="fa-solid fa-envelope email p-1"></i></span>
                            <input onChange={handleOnChange} value={email} className='overflow-hidden' type="email" placeholder="Enter your email" name='email' />
                        </div>

                        <div className='login-input-box'>
                            <span className="border-end px-2 py-1"><PersonIcon className='username' sx={{ color: 'green' }} /></span>
                            <input onChange={handleOnChange} value={username} className='overflow-hidden' type="text" placeholder="Enter your username" name='username' />
                        </div>

                        <div className='login-input-box'>
                            <span className="border-end px-2 py-1"><LockIcon className='password' style={{ color: 'red' }} /></span>
                            <input onChange={handleOnChange} value={password} className='overflow-hidden' type="password" placeholder="Enter your password" name='password' />
                        </div>

                        <div className='text-secondary isAgree-box py-3'>
                            <input type="checkbox" className='me-1 custom-checkbox' onChange={handleCheckboxChange} />Do you agree
                        </div>

                        <Button type='button' onClick={handleSubmitButton} variant="contained" className='text-bold fs-6 mb-3'>
                            Signup
                        </Button>

                        <p className='col-12 text-center m-0'>
                            <Link to={"/login"} className='fs-12 col-12 '>
                                User have already account
                            </Link>
                        </p>

                    </form>
                </div>

                <div className='fs-12 text-center text-secondary py-4'>
                    <p className='m-0'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
                    <p className='my-2'>Please visit <span className='gray-link'>this article</span> to know more.</p>
                    <p className='m-0'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <span className='gray-link'>offline forms</span>. For help, <span className='gray-link'>click here</span>.</p>
                </div>
            </div>

            <ToastContainer
                position="bottom-left"
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

