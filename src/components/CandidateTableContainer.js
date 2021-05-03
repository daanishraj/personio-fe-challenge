import React from 'react'
import CandidateTable from './CandidateTable'

const CandidateTableContainer = (props) =>{
    return (
        <div>
            <CandidateTable data = {props.data}/>
        </div>
    )
}

export default CandidateTableContainer