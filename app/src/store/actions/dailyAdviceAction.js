import axios from 'axios'


export const FETCHING_MISSIONS_START = "FETCHING_MISSIONS_START";
export const FETCH_MISSIONS_SUCCESS = "FETCH_MISSIONS_SUCCESS";
export const FETCH_MISSIONS_FAIL = "FETCH_MISSIONS_FAIL";

export const fetchAdvice = () => (dispatch) => {
    //dispatch ADD_ADVICE
    dispatch({ type: FETCHING_MISSIONS_START })
    // make an axios call
    axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => {
            // inside .then(), dispatch new action with data
            // res.data
            debugger
            dispatch({ type: FETCH_MISSIONS_SUCCESS, payload: res.data });
        })
        .catch((err) => /*dispatch({type: FETCH_MISSIONS_FAIL, payload:{errorMessage:err.data}}*/ console.log(err));

}