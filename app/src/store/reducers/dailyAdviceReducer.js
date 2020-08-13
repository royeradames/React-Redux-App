import {
    FETCHING_MISSIONS_START, 
    FETCH_MISSIONS_SUCCESS, 
    FETCH_MISSIONS_FAIL
} from '../actions'

const initialState = {
    dailyAdvice: '',
    errorMessage: '',
    isFirstRender: true,
    isLoading: false
}
export const dailyAdviceReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_MISSIONS_START:
            return{
                ...state,
                isLoading: true,
            }
        case FETCH_MISSIONS_SUCCESS:
            debugger
            return {
                ...state,
                isLoading: false,
                dailyAdvice: action.payload.slip.advice
            }
        case FETCH_MISSIONS_FAIL:
            return{
                ...state,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}