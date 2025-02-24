import React, { createContext,useContext} from 'react';

const ResultContext = createContext();

export const UseContext = ({ children }) => {
  const resultData = { sgpa: "10", cgpa: "10" };

  return (
    <ResultContext.Provider value={resultData}>
      {children}
    </ResultContext.Provider>
  );
};
export const useResult = () => useContext(ResultContext);
