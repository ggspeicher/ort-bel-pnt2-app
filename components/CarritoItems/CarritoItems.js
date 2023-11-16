import CarritoItem from "../CarritoItem/CarritoItem"

export default ({ carrito, setCarrito }) => {

    return (
        <>
            {
                carrito.map((producto) => <CarritoItem key={producto.id} {...producto} setCarrito={setCarrito} carrito={carrito} />)
            }
        </>
    );
}