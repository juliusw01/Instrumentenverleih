
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './styles.css'

export default function Navbar(){
    return(
        <nav className="nav">
            <Link to="/" className="site-title">
                Ingos Instrumentenverleih
            </Link>
            <div>
                <p>
                    <Link to="/login">
                        Anmelden
                    </Link>
                </p>
                <p>
                    <Link to="/cart">
                        Warenkorb
                    </Link>
                </p>
            </div>
        </nav>
    )
}