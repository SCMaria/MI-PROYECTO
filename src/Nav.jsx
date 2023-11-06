import { Link } from "react-router-dom";
import './nav.css'

function Nav(){
    return(
        <nav>
            <ul>
                <li>
                <button type="submit">
                <Link to="/" className="nav">Inicio</Link>
                </button>
                </li>
                <li>
                <button>
                <Link to="/historial" className="nav">Historial</Link>
                </button>   
                </li>
               
            </ul>
        </nav>
    )
}
export default Nav;
