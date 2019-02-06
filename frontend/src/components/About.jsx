import React, { Component } from 'react'
import './css/about.css'

import Timeline from './Timeline'

export default class About extends Component {

    state = {
        listItens: ""
    }

    componentWillMount(){
        this.setState({listItens: this.props.listItens})
    }

    render() {
        return (
            <section id="about">
                <h1>ABOUT</h1>
                <p>{this.props.data.description}</p>
                <Timeline data={this.props.data.listItens} />
            </section>
        )
    }
}