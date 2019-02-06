import React from 'react'
import jQuery from 'jquery'
import { Link } from 'react-router-dom'

import './css/portfolio.css'

const openModal = function () {
    jQuery(document).ready(function ($) {
        $('.itemPortfolio a').click(function () {
            $('#modalPort').css({ display: 'block' })
            $('body, html').css({ overflow: 'hidden' })
        })
    })
}

const hoverLinkPlus = function () {
    jQuery(document).ready(($) => {
        $('.itemPortfolio a').mouseenter(function () {
            const child = $(this).children().get(0)
            $(child).addClass('linkPlus-hover')
        })
        $('.itemPortfolio a').mouseleave(function () {
            const child = $(this).children().get(0)
            $(child).removeClass('linkPlus-hover')
        })
    })
}

export default props =>
    <section id="portfolio">
        {hoverLinkPlus()}
        {openModal()}
        <h1>PORTFOLIO</h1>
        <p>{props.data.description}</p>
        <div id="itensPortfolio">
            {props.data.listItens.map((i, k) => {
                return (
                    <div key={k} className="itemPortfolio">
                        <Link to={`/portfolio/` + i.url}>
                            <div className="linkPlus">
                                <i className="fa fa-plus"></i>
                            </div>
                            <img src={i.urlImg} alt="" srcSet="" />
                        </Link>
                        <h4>{i.title}</h4>
                        <p>{i.description}</p>
                    </div>
                )
            })}
        </div>
    </section >