import CompraItem from "../CompraItem/CompraItem"


export default ({ compras }) => {

    return (
        <>
            {
                compras.map((compra, index) => {

                    return (
                        <CompraItem key={index} compra={compra} ultimaCompra={index === compras.length-1}></CompraItem>
                    )
                })
            }
        </>
    )
}