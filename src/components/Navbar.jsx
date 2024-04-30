
import Case from "./Case";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "../components/Login"

export default function Navbar() {
    const [ showLogin, setShowLogin ] = useState(false)
    const handleLoginClick = () => {
        setShowLogin(true);
    }
    return (
        <div className="bg-green-600 py-4">
            <Case>
                {showLogin && <Form/>}
                <div className="flex items-center">
                    <Link
                        className=" font-semibold uppercase text-white sm:mx-32 sm:text-xl absolute"
                        to="/"
                    >
                        Toko Kue
                    </Link>
                    <div className="flex mx-auto">
                    <NavLink href="/#home">Home</NavLink>
                    <NavLink href="/#about">About</NavLink>
                    <NavLink href="/#produk">Gallery</NavLink>
                    </div>
                    <button onClick={handleLoginClick} className="font-semibold uppercase text-green-600 sm:mx-32 sm:text-lg absolute -right-1 bg-white px-4 rounded-xl hover:text-white hover:bg-green-600">Login</button>
                </div>
            </Case>
        </div>
    );
}