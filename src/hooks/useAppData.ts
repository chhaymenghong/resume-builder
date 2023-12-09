import { createContext, useContext } from 'react';
import { initialContextData } from '../constants';


type IAppContext = typeof initialContextData;

export const AppContext = createContext<IAppContext>(initialContextData);

export const useAppData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppData must be used within a AppProvider');
  }
  return context;
}