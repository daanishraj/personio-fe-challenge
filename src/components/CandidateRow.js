import React, {useState} from 'react'

const CandidateRow  = (props) =>{
    const candidate = props.candidate
    
    const [hover, setHover] = useState(false)
    const toggleHover = () => {
        return setHover(!hover)
    }

    const getAge = (dateOfBirth) => {
        const ageDate = new Date(Math.floor((Date.now() - new Date(dateOfBirth).getTime())))
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    const capitalizeFirstLetter = (str) =>{
        if (str) {
            return (str.substring(0,1).toUpperCase() + str.substring(1,))
        }
    }


/**
 * TODO:
 * Move email as a subtext under name
 * change birth_date to age
 */

    return (
        <tr class= {hover ? "active-row ": ""} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td class="age">{getAge(candidate.birth_date)}</td>
            <td class="years-experience">{candidate.year_of_experience}</td>
            <td>{candidate.position_applied}</td>
            <td>{candidate.application_date}</td>
            <td>{capitalizeFirstLetter(candidate.status)}</td>
        </tr>
    )


}

export default CandidateRow