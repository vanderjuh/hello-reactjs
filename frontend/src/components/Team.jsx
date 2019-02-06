import React, { Fragment } from 'react'
import './css/team.css'

export default props =>
    <section id="team">
        <h1>OUR AMAZING TEAM</h1>
        <p>{props.data.description}</p>
        <div id="itensTeam">
            {props.data.listItens.map((d, i) => {
                return (
                    <Fragment key={i}>
                        <div>
                            <img src={d.urlImg} alt="" />
                            <h4>{d.name}</h4>
                            <p>{d.occupation}</p>
                            <ul className="social">
                                <li>
                                    <a href="#twitter">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#linkedin">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                    </Fragment>
                )
            })}
        </div>
        <p>{props.data.subDescription}</p>
    </section>