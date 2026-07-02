import { createContext, useContext, useEffect, useReducer} from "react";
import { financeReducer, initialState } from "../reducers/financeReducer";

const FinanceContext = createContext()

export  function FinanceProvider ({children}) {
    const [state, dispatch] = useReducer (financeReducer, initialState)

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },[state]);


    return (
        <FinanceContext.Provider value={{state,dispatch}}>
            {children}
        </FinanceContext.Provider>
    )

}

 export function useFinance() {
     return useContext(FinanceContext)
 }