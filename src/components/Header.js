import React from "react"
import logo from '../imgs/personio_logo.svg'

const Header = ()=>{
    return (
        <div className="container">
             <img src={logo} alt="Logo" />
            <h1>Applications List</h1>
        </div>
    )
}

export default Header