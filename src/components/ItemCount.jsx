import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import './count.scss'
const ItemCount = ({ stock, initial, setAlternador, price, image, name, id, category }) => {
    const [valor, setValor] = useState(1);
    const { addItem, isInCart, cart } = useContext(CartContext)
    const indexEncontrado = cart.findIndex((item) => {
        return item.id == id
    })
    if (indexEncontrado != -1) {
        stock = stock - cart[indexEncontrado].quantity
    }
    return (
        <>
            {stock == 0 ? <p>No hay más stock</p> : <>
                <div className="agregadorYRestador">          
                    <button onClick={() => { valor < stock && setValor(valor + 1) }} className="but"><span>+</span></button>
                    <p>{valor}</p>
                    <button onClick={() => { valor > initial && setValor(valor - 1) }} className="but"><span>-</span></button>
                </div>
                <button onClick={() => {
                    setAlternador(true)
                    isInCart(id, valor);
                    if (indexEncontrado == -1) {
                        addItem(id, valor, name, category, price, image)
                    }
                }}>Agregar al carrito</button></>}

        </>
    )
}
export default ItemCount;