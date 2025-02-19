import '../css/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <header>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <div>
                    <span>Hooks</span>
                    <ol>
                        <li><Link to="use-state">UseState</Link></li>
                        <li><Link to="use-effect">UseEffect</Link></li>
                    </ol>
                </div>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/skills">skills</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;