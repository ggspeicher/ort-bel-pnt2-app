import CompraItem from "../CompraItem/CompraItem"


export default ({ compras }) => {

    return (
        <>
            {
                compras.sort((a, b) => a.fecha < b.fecha ? 1 : -1 ).map((compra, index) => {

                    return (
                        <CompraItem key={index} compra={compra} ultimaCompra={index === 0}></CompraItem>
                    )
                })
            }
        </>
    )
}