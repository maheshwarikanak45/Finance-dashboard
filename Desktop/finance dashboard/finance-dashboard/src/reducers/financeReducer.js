export const initialState = {
    transactions : JSON.parse(localStorage.getItem('transactions')) || [],
    editTransaction : null
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

            case "EDIT_TRANSACTION":
                return {
                    ...state,
                    transactions: state.transactions.map(t => t.id === action.payload.id ? action.payload : t)
                }

            case "SET_EDITING":
                return {
                    ...state,
                    editingTransaction: action.payload
                }
            default: 
            return state    
    }
}