import React from 'react'
import './css/header.css'

export default props =>
    <header id="header">
        <div id="greeting">
            <h2>{props.data.first}</h2>
            <h1>{props.data.second}</h1>
            <a href="#contact">
                <button>TELL ME MORE</button>
            </a>
        </div>
    </header>