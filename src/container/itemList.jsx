import Item from "../components/Item"
const ItemList = ({ items, urlParam }) => {
    return (
        <>
            <div className="divPrincipal">
                {items.map(productos => {
                    if (urlParam == undefined) {
                        return (
                            <>
                                <Item name={productos.name} category={productos.category} id={productos.id} stock={productos.stock} image={productos.image} description={productos.description} price={productos.price} key={productos.id} />
                            </>
                        )
                    }
                    else {
                        if (productos.category == urlParam) {
                            return (
                                <>
                                    <Item name={productos.name} category={productos.category} id={productos.id} stock={productos.stock} image={productos.image.replace('../','../../')} description={productos.description} price={productos.price} key={productos.id} />
                                </>
                            )
                        }
                    }
                })}
            </div>
        </>
    )
}
export default ItemList