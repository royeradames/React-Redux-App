import {ADD_ADVICE} from '../actions'

const initialState = {
    dailyAdvice: '',
    errorMessage: '',
    isFirstRender: true,
}
export const dailyAdviceReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ADVICE:
            return{
                state
            }
        default:
            return state
    }
}