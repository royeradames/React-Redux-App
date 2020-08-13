import React, { useEffect } from 'react';
//redux import
import { connect } from 'react-redux'
import { fetchAdvice} from '../store'
const DailyAdvice = (props) => {
    useEffect(() => {
        // call an action creator that will be in charge of fetching data
        props.fetchAdvice()
    }, [])
    return (
        <div className="daily-advice-contaienr">
            <h1 className="heading">
                Daily Advice
            </h1>
            <p className="body">
                "{ props.isLoading? `It's loading`: props.dailyAdvice}"
            </p>
            <button class="footer" onClick={props.fetchAdvice}>{
                // props.isFirstRender ? 'Click me to listen to good advice' : 'Make it a new day'
                'Make it a new day'
            }</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dailyAdvice: state.dailyAdvice,
        errorMessage: state.errorMessage,
        isFirstRender: state.isFirstRender,
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps, {fetchAdvice})(DailyAdvice)