import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/loader";
import FirebaseContext from "../contexts/fbContext";

const ItemDetailContainer = ({ onAdd }) => {
    const {getProducts, productos} = useContext(FirebaseContext)
    const [loader, setLoader] = useState(true)
    const { Id } = useParams();
    const getItem = async () => {
        try{
            getProducts()
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getItem()
            setLoader(false)
        }, 2000)
    }, [productos])
    return (
        <>
            {
            loader 
            ? <Loader />
            : productos.map(productos => productos.id == Id && <ItemDetail items={productos} onAdd={onAdd} key={productos.id} />)
            }
        </>
    )
}

export default ItemDetailContainer