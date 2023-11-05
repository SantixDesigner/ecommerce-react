import './Form.scss'
import { useContext } from 'react'
import CartContext from '../contexts/CartContext'
import FirebaseContext from '../contexts/fbContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Form = () => {
    const [form, setForm] = useState([])
    const [toggleHandler, setToggleHandler] = useState(false)
    const { clearCart, cart, sacarCantidad, sacarPrecio } = useContext(CartContext)
    const { setProductsToFirebase } = useContext(FirebaseContext)
    return (
        <>
            <form action="">
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" onInput={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} required />

                <label>Apellido:</label>
                <input type="text" id="apellido" name="apellido" onInput={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} required />

                <label>Email:</label>
                <input type="email" id="email" name="email" onInput={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} required />

                <label>Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" onInput={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} required />

                <label>Dirección:</label>
                <input id="direccion" name="direccion" rows="4" onInput={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} required />
                {!toggleHandler ? <input type="submit" value="Enviar" onClick={(e) => {
                    e.preventDefault()
                    if (form.nombre && form.apellido && form.email && form.telefono && form.direccion) {
                        setProductsToFirebase({ cart }, { form }, sacarCantidad, sacarPrecio)
                        clearCart()
                        setToggleHandler(true)
                    }

                }
                } /> : <Link to='/'>Volver al inicio</Link>}

            </form>
        </>
    )
}

export default Form