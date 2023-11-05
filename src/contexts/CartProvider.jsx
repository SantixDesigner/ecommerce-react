import { useState } from "react"
import CartContext from "./CartContext"
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const isInCart = (id, quantity) => {
        const indexEncontrar = cart.findIndex((item) => {
            return item.id == id
        })
        if (indexEncontrar != -1) {
            cart[indexEncontrar].quantity += quantity;
        }
    }
    const findInCart = (id) => {
        return cart.find(item => {
            return item.id == id
        })
    }
    const addItem = (id, quantity, name, category, price, image) => {
        setCart([...cart, { name: name, id: id, quantity: quantity, category: category, price: price, image: image }])
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) => {
        let findIndex = cart.findIndex(item => {
            item.id == id
        })
        cart.splice(findIndex, 1);
        setCart([...cart])
    }
    const sacarCantidad = () => {
        let sumaCantidad = 0; 
        cart.map((item) => {
            sumaCantidad+=item.quantity
        })
        return sumaCantidad
    }
    const sacarPrecio = () => {
        let sumarPrecios = 0;
        cart.map((item) => {
            sumarPrecios+=item.price*item.quantity
        })
        return sumarPrecios
    }
    return (
        <CartContext.Provider value={{ cart, clearCart, removeItem, addItem, isInCart, findInCart, sacarCantidad, sacarPrecio }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;