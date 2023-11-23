import CarritoItem from "../CarritoItem/CarritoItem"

export default ({ carrito, setCarrito }) => {

    return (
        <>
            {
                carrito.map((producto) => {
                    return (
                        <CarritoItem key={producto.id} producto={producto} carrito={carrito} setCarrito={setCarrito} />
                    )
                })
            }
        </>
    );
}