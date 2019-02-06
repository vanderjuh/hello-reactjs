import React from 'react'
import './css/clients.css'

export default props =>
    <section id="clients">
        {props.data.map((c, i) => {
            return (
                <a key={i} href={c.url}><img src={c.urlImg} alt="" /></a>
            )
        })}
    </section>