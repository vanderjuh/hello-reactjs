import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jQuery from 'jquery'

import { getJSON } from '../API'

import './css/modalPort.css'

export default class ModalPortfolio extends Component {

    state = {
        item: ""
    }

    ableOverFlow() {
        jQuery(document).ready(function ($) {
            $('body, html').css({ overflow: 'auto' })
        })
    }

    componentDidMount() {
        let item = this.props.data.match.params.item
        getJSON('http://192.168.0.12:3000/portfolio').then(data => {
            data.listItens.forEach(element => {
                if (item === element.url) {
                    this.setState({ item: element })
                    return
                }
            });
        })
    }

    render() {
        return (
            <div id="modalPort">
                <div id="boxModalPort">
                    <div id="buttonClose">
                        <Link onClick={() => this.ableOverFlow()} to="/">Close</Link>
                    </div>
                    <div id="contentModal">
                        <h1>{this.state.item.title}</h1>
                        <p>{this.state.item.description}</p>
                        <div>
                            <img src={this.state.item.urlImg} alt="" />
                            <p>{this.state.item.text} </p>
                            <ul>
                                <li>Date: {this.state.item.date}</li>
                                {/* <li>Client: Threads</li>
                                <li>Category: Illustration</li> */}
                            </ul>
                        </div>
                    </div>
                    <div id="buttonClose-yellow">
                        <Link onClick={() => this.ableOverFlow()} to="/">
                            <i className="fa fa-close"></i> Close Project
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}