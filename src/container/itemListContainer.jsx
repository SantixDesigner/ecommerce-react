import { useParams } from 'react-router-dom';
import '../App.scss'
import ItemList from "./itemList";
import { useState, useEffect, useContext } from "react";
import Loader from '../components/loader';
import FirebaseContext from '../contexts/FbContext';
const ItemListContainer = () => {
    const {getProducts, productos} = useContext(FirebaseContext)
    const [loader, setLoader] = useState(true)
    const { IdCategoria } = useParams()
    const encontrarProductos = async () => {
        try {
            getProducts()
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            encontrarProductos()
            setLoader(false)
        }, 2000)
    }, [productos])
    return (
        <>
            {
                loader ? <Loader /> : <ItemList items={productos} urlParam={IdCategoria} />
            }
            
        </>
    )
}
export default ItemListContainer