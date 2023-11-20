import React, { createContext, useContext, useEffect, useState } from 'react';

const ExpandedContext = createContext();

export const ExpandedProvider = ({ children }) => {

    const predeterminado = {
        InformacionPersonal: true,
        InfoCompras: false,
        Configuracion: false,
        Soporte: false
    }

    const [expandedSections, setExpandedSections] = useState(predeterminado);

    return (
        <ExpandedContext.Provider value={{ expandedSections, setExpandedSections }}>
            {children}
        </ExpandedContext.Provider>
    );
};

export const useExpanded = () => useContext(ExpandedContext);