// En un nuevo archivo, por ejemplo, PerfilContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import ServicioPerfil from '../services/ServicioPerfil';

const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        const obtenerPerfil = async () => {
            try {
                setPerfil(await ServicioPerfil.obtenerPerfilPorUsuario(1));
            } catch (err) {
                console.error(err)
            }
        };
        obtenerPerfil();
    }, [perfil])

  const actualizarPerfil = (nuevoPerfil) => {
    setPerfil(nuevoPerfil);
    console.log(perfil.telefono)
  };

  return (
    <PerfilContext.Provider value={{ perfil, actualizarPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
};

export const usePerfil = () => {
  const context = useContext(PerfilContext);
  if (!context) {
    throw new Error('usePerfil debe ser usado dentro de un PerfilProvider');
  }
  return context;
};