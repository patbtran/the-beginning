import { Link } from "react-router-dom";
import { useUsername, useAuth } from "../authWrapper/AuthContext";


function Header() {
    const username = useUsername();
    const { logout } = useAuth();

    return (
        <div className="bg-[#1a1616] text-white p-4">
            <h1 className="text-4xl">cheesa</h1>
            <nav>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>
                        <Link to="/contact">projects</Link>
                    </li>
                    <li>
                        
                        {username ? <p onClick={logout}>logout</p> : <Link to="/login">login</Link>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

