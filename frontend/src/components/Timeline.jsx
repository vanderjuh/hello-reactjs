import React from 'react'

import './css/timeline.css'

export default props =>
    <div className="timeline">
        {
            props.data.map((d, i) => {
                return (
                    <div key={i} className={"container ".concat((i % 2 === 0) ? 'left' : 'right')}>
                        <div className="content">
                            <h2>{d.title}</h2>
                            <h2>{d.subTitle}</h2>
                            <p>{d.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>