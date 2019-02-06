import React from 'react'
import './css/services.css'

export default props =>
    <section id="services">
        <h1>SERVICES</h1>
        <p>{props.data.description}</p>
        <div id="itensServices">
            {props.data.listServices.map((s, i) => {
                return (
                    <div key={i}>
                        <div className="iconItem">
                            <i className={"fa ".concat(s.icon)}></i>
                        </div>
                        <h1>{s.title}</h1>
                        <p>{s.description}</p>
                    </div>
                )
            })}
        </div>
    </section>