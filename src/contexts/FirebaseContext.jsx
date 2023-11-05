import { db } from "../firebase/firebase";
import { collection, getDocs} from "firebase/firestore";
import FirebaseContext from "./FbContext";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
const FirebaseContextProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const getProducts = () => {
        const itemRef = collection(db,"productos")
        getDocs(itemRef).then(snapshot => {
            const docs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProductos(docs)
        })
    }
    const setProductsToFirebase = (cart, form,  sacarCantidad, sacarPrecio) => {
        const cartCollection = collection(db,'productosCarro')
        addDoc(cartCollection, {cart: cart, form: form}).then((vara) => {
            Swal.fire({
                title: 'Compra Finalizada',
                text: `Tu codigo de seguimiento es ${vara.id}, compraste un total de ${sacarCantidad()} productos a un precio de $${sacarPrecio()}`,
                icon: 'success',
            })
        })
    }
    return(
        <FirebaseContext.Provider value={{getProducts, productos, setProductos, setProductsToFirebase}}>
            {children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseContextProvider