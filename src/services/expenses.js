import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) =>{
    try{
        // api call
        const expenses = [
            { id: 1, type:  "food" , amount:  3.14}, 
            { id:  2, type:  "gas", amount:  2 },
            { id:  3, type:  "transport", amount:  5.3 }
        
        ];

        dispatch(ActionCreators.setExpenses(expenses));

    } catch{
        console.log("Error");
    }
}