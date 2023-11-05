import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import Loader from "./Loader";
import './cards.scss'
import './loader.scss'
import { Link } from "react-router-dom";
const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    const [loader, setLoader] = useState(true)
    console.log(cart)
    setTimeout(() => {
        setLoader(false)
    }, 2000)
    return (
        <>
            <div className="divs">
                {
                    loader ? <Loader /> :
                        cart.map((item) => {
                            return (
                                <>
                                    <div className="div">
                                        <img src={item.image} alt="" />
                                        <h2>{item.name}</h2>
                                        <h2>${item.price * item.quantity}</h2>
                                        <h4>Cantidad a comprar: {item.quantity}</h4>
                                        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                    </div>
                                </>
                            )
                        })
                }

            </div>
            {loader || cart.length == 0 ? <h2>No hay nada cargado.</h2> : <Link to={'/form'} className="formDirection">Ir a formulario</Link>}
        </>
    )
}

export default Cart;