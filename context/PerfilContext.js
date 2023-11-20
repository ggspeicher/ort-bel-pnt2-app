import React, { createContext, useContext, useEffect, useState } from 'react';
import ServicioPerfil from '../services/ServicioPerfil';

const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {

  // estado global de mi perfil o usuario
  const [perfil, setPerfil] = useState({});

  // cargo y obtengo mi usuario
  useEffect(() => {
    const userId = "1";
    obtenerYActualizarPerfil(userId);
  }, []); 

  // este metodo se usa y se usara en los lugares donde se actualice el usuario en cuestion
  // ya que al actualizar firebase necesitamos volver a obtener los datos porque si no estariamos con informacion vieja
  const obtenerYActualizarPerfil = async (userId) => {
    const perfilObtenido = await ServicioPerfil.obtenerPerfil(userId);
    setPerfil(perfilObtenido);
  };


  return (
    // paso el estado perfil y el metodo responsable de actualizar los cambios en la app
    <PerfilContext.Provider value={{ perfil, obtenerYActualizarPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
};

export const usePerfil = () => useContext(PerfilContext);