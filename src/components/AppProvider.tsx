import { PropsWithChildren } from "react";
import { AppContext, initialContextData } from "../hooks/useAppData";

export const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <AppContext.Provider value= {initialContextData}>
            {children}
        </AppContext.Provider>
    );
}
