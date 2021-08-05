const initialState = {
    expenses: [],
}

export const ActionType = {
    SET_EXPENSES: 'SET_EXPENSES',
}

export const ActionCreators = {
    setExpenses: payload => ({ type: ActionType.SET_EXPENSES, payload }),
}

export default (state = initialState, action) => {
    switch(action.type){
        case ActionType.SET_EXPENSES:
            return { ...state, expenses: [...action.payload] };
        
        default:
            return state;
    }
}