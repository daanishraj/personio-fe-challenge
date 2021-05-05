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

    const getDaysBetween = (firstDate, secondDate) => {
        const SINGLE_DAY = 1000*60*60*24
        const diffInMs = Math.abs(firstDate - secondDate)
        return Math.round(diffInMs/SINGLE_DAY);
    }
    
    
    const capitalizeFirstLetter = (str) =>{
        if (str) {
            return (str.substring(0,1).toUpperCase() + str.substring(1,))
        } else {
            return "";
        }
    }

    const daysSinceApplication = getDaysBetween(new Date(candidate.application_date),new Date())
    const capitalizedAppStatus = capitalizeFirstLetter(candidate.status)
    
    return (
        <tr className= {hover ? "active-row ": ""} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td className="age">{getAge(candidate.birth_date)}</td>
            <td className="years-experience">{candidate.year_of_experience}</td>
            <td>{candidate.position_applied}</td>
            <td>
                {candidate.application_date}
                <div className="subtext">{daysSinceApplication} days ago</div>
            </td>
            <td>
                <div className={`status ${candidate.status}`}></div>
                {capitalizedAppStatus}
            
            </td>
        </tr>
    )


}

export default CandidateRow