import React from 'react';

export default function DailyAdvice(props) {
    return (
        <div className="daily-advice-contaienr">
            <h2 className="heading">
                Daily Advice
            </h2>
            <p className="body">
                "{props}"
            </p>
            <button class="footer" onClick={''}>{
                props.isFirstRender ? 'Click me to listen to good advice' : 'Make it a new day'
            }</button>
        </div>
    )
} 