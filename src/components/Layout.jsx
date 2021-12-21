import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Navbar, Footer } from '.'

const Layout = ({ title, children, description }) => {
    const {home}=useSelector((state)=>state)
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Standalone` : 'StandAlone'}</title>
                {description && <meta name='description' content={description} />}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
            </Head>
            <Navbar />
            <main >
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
