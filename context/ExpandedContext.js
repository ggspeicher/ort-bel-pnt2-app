import React, { createContext, useContext, useState } from 'react';

const ExpandedContext = createContext();

export const ExpandedProvider = ({ children }) => {
  const [expandedIP, setExpandedIP] = useState(false);
  const [expandedConfiguracion, setExpandedConfiguracion] = useState(false);
  const [expandedSoporte, setExpandedSoporte] = useState(false);

  return (
    <ExpandedContext.Provider
      value={{
        expandedIP,
        setExpandedIP,
        expandedConfiguracion,
        setExpandedConfiguracion,
        expandedSoporte,
        setExpandedSoporte,
      }}
    >
      {children}
    </ExpandedContext.Provider>
  );
};

export const useExpanded = () => {
  return useContext(ExpandedContext);
};