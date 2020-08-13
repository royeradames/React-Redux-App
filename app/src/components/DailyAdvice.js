import React, { useEffect } from 'react';
//redux import
import { connect } from 'react-redux'
import { fetchAdvice } from '../store'
import styled from 'styled-components'

const Section = styled.section`
    max-width: 100%;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    body{
        padding: 0;
        overflow-x: hidden;
        min-width: 320px;
        /* background: #fff; */
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
        font-size: 14px;
        line-height: 1.4285em;
        color: rgba(0,0,0,.87);

    }
    .card{
        max-width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 0;
        background: #fff;
        opacity: .9;
        padding: 0;
        border: none;
        border-radius: .28571429rem;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        transition: box-shadow .1s ease,transform .1s ease;
        z-index: '';
        padding: 2rem;

        h1{
            font-size: 4rem;
            color: skyblue;
        }
        p{
            font-size: 2rem;
        }
        button{
            padding: 2rem;
            font-size: 2rem;
            background-color: skyblue;
            color: white;
            border-color: #3D89D5;
            
        }
    }
`

const DailyAdvice = (props) => {
    useEffect(() => {
        // call an action creator that will be in charge of fetching data
        props.fetchAdvice()
    }, [])
    return (
        <Section className="daily-advice-contaienr">
            <div className="card">
                <h1 className="heading">
                    Daily Advice
                </h1>
                <p className="body">
                    "{props.isLoading ? `It's loading` : props.dailyAdvice}"
                </p>
                <button class="footer" onClick={props.fetchAdvice}>{
                    // props.isFirstRender ? 'Click me to listen to good advice' : 'Make it a new day'
                    'Make it a new day'
                }</button>
            </div>
        </Section>
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

export default connect(mapStateToProps, { fetchAdvice })(DailyAdvice)