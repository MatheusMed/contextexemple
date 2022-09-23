import { createContext } from 'react';

interface ContextType {
  name: string;
  age: number;

}
type ContextProviderType = {
  children: JSX.Element;
}

const initialState = {
  name: 'Matheus',
  age: 90
}

export const Context = createContext<ContextType>(initialState);


export function ContextProvider({ children }: ContextProviderType) {
  return (
    <Context.Provider value={initialState}>{children}</Context.Provider>
  );
}

