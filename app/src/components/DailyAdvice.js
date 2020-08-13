import React from 'react';
//redux import
import { connect } from 'react-redux'

function DailyAdvice(props) {
    return (
        <div className="daily-advice-contaienr">
            {/* <h2 className="heading">
                Daily Advice
            </h2>
            <p className="body">
                "{props}"
            </p>
            <button class="footer" onClick={''}>{
                props.isFirstRender ? 'Click me to listen to good advice' : 'Make it a new day'
            }</button> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        dailyAdvice: state.dailyAdvice,
        errorMessage: state.errorMessage,
        isFirstRender: state.isFirstRender,
    }
}

export default connect(mapStateToProps, {  })(DailyAdvice)