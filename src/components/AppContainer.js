import React from 'react'
import Header from './Header'
import CandidateTableContainer from './CandidateTableContainer'

/**
 * TODO:
 * Should data be a part of state? 
 * Use component did mount to render every time new data is received from the api
 */

const AppContainer = () => {
        return (
            <div class="appContainer">
                <Header/>
                <CandidateTableContainer/>
            </div>
        )
    }

    export default AppContainer