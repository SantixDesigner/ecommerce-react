import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
const CartWidget = () => {
    return(
        <Link to={'/cart'} style={{color: 'black'}}><FontAwesomeIcon icon={faCartShopping} className="fa-4x" /></Link>
    )
}
export default CartWidget