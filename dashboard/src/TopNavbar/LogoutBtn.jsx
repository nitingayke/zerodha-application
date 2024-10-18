import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function LogoutBtn({ setLoginUser, showToast }) {

    const [loginMessage, setLoginMessage] = useState(false);
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }
            const { data } = await axios.post(
                "http://localhost:9920",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setLoginUser(user);

            if (status) {
                setLoginMessage(true);
            } else {
                showToast('You need to login');
                removeCookie("token");
                // navigate("/login");
                window.location.href = "http://localhost:5173/login";
            }
        };

        verifyCookie();
    }, [cookies, navigate, removeCookie]);

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

    return (

        <button type='button' onClick={Logout} className='col-12 border-0 bg-transparent d-flex'><i className="fa-solid fa-arrow-right-from-bracket p-1 text-secondary"></i>Logout</button>

    )
}