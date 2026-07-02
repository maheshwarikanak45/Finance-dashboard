export const initialState = {
    transactions : JSON.parse(localStorage.getItem('transactions')) || []
}

export function financeReducer(state, action) {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
            case "DELETE_TRANSACTION":
                return {
                    ...state,
                    transactions: state.transactions.filter(t => t.id !== action.payload)
                }
            default: 
            return state    
    }
}