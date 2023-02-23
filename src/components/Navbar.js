import React from "react"
import World from "./wld.png"

export default function Navbar() {
    return (
        <nav>
            <img src={World} className="nav--logo" alt="world" />
            <h2>my travel journal</h2>
        </nav>
    )
}