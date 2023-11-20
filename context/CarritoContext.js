import React, { createContext, useContext, useEffect, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: 'COMBO 2',
            unidades: 1,
            precio: 50.00,
            stock: 6,
            urlPath: '../../assets/trago.jpg',

        }
    ]);

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => useContext(CarritoContext);