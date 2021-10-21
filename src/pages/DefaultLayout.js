import React from 'react'

import Home from './Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function DefaultLayout() {
    return (
        <>
            <Header/>
            <Home />
            <Footer />
        </>
    )
}

export default DefaultLayout
