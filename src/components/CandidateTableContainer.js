import React from 'react'
import CandidateTable from './CandidateTable'

const CandidateTableContainer = (props) =>{
    return (
        <div className="table-container">
            <CandidateTable data = {props.data}/>
        </div>
    )
}

export default CandidateTableContainer