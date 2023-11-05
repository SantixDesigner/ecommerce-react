import { useContext } from 'react'
import '../App.scss'
import { Link } from "react-router-dom"
import CartContext from '../contexts/CartContext'
const Item = ({ name, stock, id, price, description, image }) => {
    const {cart} = useContext(CartContext)

    let productoEncontrado = cart.find(item => {
        return item.id == id
    })
    if(productoEncontrado){
        stock = stock - productoEncontrado.quantity
    }
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <h4>Description: {description}</h4>
            <h4>${price}</h4>
            <Link to={`/id/${id}`}>Ver detalle de producto</Link>
            <h5>Stock: {stock}</h5>
        </div>
    )
}
export default Item