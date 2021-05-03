import React from 'react'

const CandidateRow  = (props) =>{
    const candidate = props.candidate
    
    const getAge = (dateOfBirth) => {
        const ageDate = new Date(Math.floor((Date.now() - new Date(dateOfBirth).getTime())))
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    
    getAge("1986-04-21")

/**
 * TODO:
 * Move email as a subtext under name
 * change birth_date to age
 */

    return (
        <tr>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td>{getAge(candidate.birth_date)}</td>
            <td>{candidate.year_of_experience}</td>
            <td>{candidate.position_applied}</td>
            <td>{candidate.application_date}</td>
            <td>{candidate.status}</td>
        </tr>
    )


}

export default CandidateRow