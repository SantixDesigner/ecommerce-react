import { Link } from 'react-router-dom'
import '../App.scss'
import CartWidget from "./CartWidget"

export const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/categoria/lowend'}>Ryzen 3</Link></li>
                <li><Link to={'/categoria/midend'}>Ryzen 5</Link></li>
                <li><Link to={'/categoria/highend'}>Ryzen 7</Link></li>
                <li><Link to={'/categoria/ultrahighend'}>Ryzen 9</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}
