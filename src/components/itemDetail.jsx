import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import CartContext from "../contexts/CartContext"
import { useContext } from "react"
import './cards.scss'
const ItemDetail = ({ items, onAdd }) => {
    const [alternador, setAlternador] = useState(false)
    const { findInCart } = useContext(CartContext)
    return (
        <div className="divs">
            <div className="div">
                <img src={items.image.replace('../', '../../')} alt="" />
            </div>
            <div className="div">
                <h2>{items.name}</h2>
                <h3>Price: {items.price}</h3>
                {alternador || findInCart(items.id) != undefined ? <Link to={`/cart`}>Finalizar compra</Link> : <ItemCount onAdd={onAdd} stock={items.stock} initial={items.initial} setAlternador={setAlternador} id={items.id} name={items.name} price={items.price} category={items.category} image={items.image} />}


            </div>
        </div>
    )
}

export default ItemDetail