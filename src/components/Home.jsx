import { useState, useEffect } from "react";

import '../styles/Home.css';

import SideNav from "./SideNav";

export default function Home() {
    return (
        <div className="main">
            <SideNav />
            <div className="content">
                <h1>Welcome to the <span className="metaverse-title">Metaverse</span></h1>
            </div>
        </div>
    )
}