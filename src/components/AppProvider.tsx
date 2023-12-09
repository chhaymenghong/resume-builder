import { PropsWithChildren } from "react";
import { AppContext } from "../hooks/useAppData";
import { initialContextData } from "../constants";

export const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <AppContext.Provider value= {initialContextData}>
            {children}
        </AppContext.Provider>
    );
}
