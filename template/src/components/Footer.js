import React from "react"
import { Copywrite } from "./Copywrite"
import { RedesSociais } from "./RedesSociais"
export function Footer () {
    return(
        <footer className = 'foot'>
            <RedesSociais/>
            <Copywrite/>
        </footer>
    )
}