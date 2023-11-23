import React, { createContext, useContext, useEffect, useState } from 'react';
import ServicioPerfil from '../services/ServicioPerfil';
import { auth } from '../services/config';

const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {

  // estado global de mi perfil o usuario
  const [perfil, setPerfil] = useState({});

  // https://es.stackoverflow.com/questions/468043/c%C3%B3mo-funciona-onauthstatechanged
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        actualizarPerfil(user.uid);
      }
    });
  }, []);

  // previamente debere modificar el usuario con ServicioPerfil.actualizarPerfil,
  // entonces una vez ya en firebase me traigo eso nuevo agregado al estado perfil

  // lo que hago es traerme el perfil de firebase
  const actualizarPerfil = async (userId) => {
    const perfilObtenido = await ServicioPerfil.obtenerPerfil(userId);
    setPerfil(perfilObtenido);
  };


  return (
    // paso el estado perfil y el metodo responsable de actualizar los cambios en la app
    <PerfilContext.Provider value={{ perfil, actualizarPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
};

export const usePerfil = () => useContext(PerfilContext);