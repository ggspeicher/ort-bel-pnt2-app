import { View, Text } from "react-native"
import CompraItem from "../CompraItem/CompraItem"

export default ({ compras }) => {
    return (
        <>
            {
                compras.map((compra, index) => <CompraItem key={index} compra={compra}></CompraItem>)
            }
        </>
    )
}