import React from "react"
import "animate.css/animate.compat.css";

import Footer from "./Footer"
import Header from "./Header"
import "../styles/app.scss"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Layout = props => {
    return (
        <div>
            <Header />
            <div className={"dom-page-wrapper"} id="start">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
