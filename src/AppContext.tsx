import React, { useReducer, useContext, ReactChild } from "react";
import { State } from "./types";
import mainReducer, { initialState } from "./reducers/reducer";
const AppContext = React.createContext<[State, Function?]>([initialState]);

export const Provider = ({ children }: { children?: ReactChild }) => {
  const contextValue = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useJobsData = () => useContext(AppContext);
