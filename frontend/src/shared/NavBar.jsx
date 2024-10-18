import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';
import "./Shared.css";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    const [selectedBtn, setSelectedBtn] = useState("redirect-btn1");
    
    const handleSelectedButton = (e) => {
        document.querySelector(`#${selectedBtn}`).classList.remove("selected-button");
        let id = e.target.id;
        document.querySelector(`#${id}`).classList.add("selected-button");
        setSelectedBtn(id);
    };

    return (
        <div className='col-12 landing-navbar mt-auto sticky-top'>

            <nav className="navbar navbar-expand-md col-md-11 col-lg-10 col-12 mx-auto px-2 d-flex justify-content-between">

                <Link to={"/"}><img src="/assets/logo.svg" alt="" height={18} className='my-2'/></Link>
                <button className="navbar-toggler border-0 navbar-toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon/>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className='d-flex list-unstyled m-0 p-0 navbar-redirect-link fs-16 navbar-nav'>
                        <li>
                            <Link id='redirect-btn1' onClick={handleSelectedButton} to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link id='redirect-btn2' onClick={handleSelectedButton} to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link id='redirect-btn3' onClick={handleSelectedButton} to={"/products"}>Products</Link>
                        </li>
                        <li>
                            <Link id='redirect-btn4' onClick={handleSelectedButton} to={"/pricing"}>Pricing</Link>
                        </li>
                        <li>
                            <Link id='redirect-btn5' onClick={handleSelectedButton} to={"/support"}>Support</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}