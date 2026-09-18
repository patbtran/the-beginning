import { Link } from "react-router-dom";
import { useUsername, useAuth } from "../authWrapper/AuthContext";


function Header({ setContactOpen }) {
    const username = useUsername();
    const { logout } = useAuth();

    return (
        <div className="fixed top-0 left-0 w-full z-50">

            {/* Invisible trigger zone that detects the mouse and makes the header show */}
            <div className="h-20 w-full group">

                {/* Header */}
                <div className="absolute top-0 left-0 w-full
                                -translate-y-full
                                group-hover:translate-y-0
                                transition-transform duration-700
                                bg-[#1a1616] text-white p-4">


                    <nav>
                        <ul className="flex justify-center space-x-4 mt-2">

                            <li>
                                <Link to="/">home</Link>
                            </li>

                            <li>
                                <Link to="/projects">projects</Link>
                            </li>


                            <li>
                                {username ? (
                                    <p onClick={logout}>logout</p>
                                ) : (
                                    <Link to="/login">login</Link>
                                )}
                            </li>

                        </ul>
                    </nav>
                    {/* Contact Button */}
                    <button
                        onClick={() => setContactOpen(true)}
                        className="absolute right-8 top-4"
                    >
                        contact
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Header;

