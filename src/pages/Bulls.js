import React from 'react';
import Header from '../components/Header/Header';
import MainApp from '../components/MainApp/MainApp';
import { lakersSentimentAnalysis } from '../Tools/Utilities';
import { predictionData } from '../Tools/Utilities';
import { scoreData } from '../Tools/Utilities';

function Bulls() {
    return (
        <div>
            <Header/>
            <MainApp 
                optionName="Chicago Bulls" 
                teamScoreData={scoreData} //respective team downloaded data
                teamSentimentData={lakersSentimentAnalysis } //respective team downloaded data
                teamPredictionData={predictionData} //respective team downloaded data
            />
        </div>
    );
}

export default Bulls;