import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routers from '../app/Routers'

import Menu from '../components/Menu'
import Header from '../components/Header'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Team from '../components/Team'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import './css/app.css'
import './css/responsiveness.css'
import 'font-awesome/css/font-awesome.min.css'
import { anchorage, changeColorFocus, topMenuAnimation, validationForm } from './js/Util'
import { getJSON } from '../API'

export default class App extends Component {

    linkHeader = 'http://192.168.0.12:3000/greeting'
    linkServices = 'http://192.168.0.12:3000/services'
    linkPortfolio = 'http://192.168.0.12:3000/portfolio'
    linkAbout = 'http://192.168.0.12:3000/about'
    linkTeam = 'http://192.168.0.12:3000/team'
    linkClients = 'http://192.168.0.12:3000/clients'

    state = {
        header: {
            first: "",
            second: ""
        },
        services: {
            description: "",
            listServices: []
        },
        portfolio: {
            description: "",
            listItens: []
        },
        about: {
            description: "",
            listItens: []
        },
        team: {
            description: "",
            subdescription: "",
            listItens: []
        },
        clients: []
    }

    init() {
        anchorage()
        changeColorFocus()
        topMenuAnimation()
        validationForm()
    }

    componentDidMount() {
        this.init()

        getJSON(this.linkHeader).then(data => {
            this.setState({ header: data })
        })
        getJSON(this.linkServices).then(data => {
            this.setState({ services: data })
        })
        getJSON(this.linkPortfolio).then(data => {
            this.setState({ portfolio: data })
        })
        getJSON(this.linkAbout).then(data => {
            this.setState({ about: data })
        })
        getJSON(this.linkTeam).then(data => {
            this.setState({ team: data })
        })
        getJSON(this.linkClients).then(data => {
            this.setState({ clients: data })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Routers />
                    <Menu />
                    <Header data={this.state.header} />
                    <Services data={this.state.services} />
                    <Portfolio data={this.state.portfolio} />
                    <About data={this.state.about} />
                    <Team data={this.state.team} />
                    <Clients data={this.state.clients} />
                    <Contact />
                    <Footer />
                </Fragment>
            </BrowserRouter>
        )
    }
}
