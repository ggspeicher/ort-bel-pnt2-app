import CarritoItem from "../CarritoItem/CarritoItem"
import { ScrollView } from "react-native-gesture-handler"
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra"
import { useState } from "react";

export default ( { carrito, setCarrito } ) => { 
  
    return (
      <ScrollView>
        {carrito.map((producto) => (
          <CarritoItem key={producto.id} {...producto} setCarrito={setCarrito} carrito={carrito}/>
        ))}
        
        <FinalizarCompra carrito={carrito}></FinalizarCompra>
      </ScrollView>
    );
  }