import { useState, useEffect } from "react";

import '../styles/Home.css';

import metaverseImage from '../images/3d-metaverse.png';

import Header from './Header';
import SideNav from "./SideNav";

export default function Home() {
    return (
        <div className="main">
            <SideNav />
            <Header />
            <div className="content">
                <div className="home__title">
                    <p className="title">Welcome to the</p>
                    <p className="title_metaverse">Metaverse</p>
                </div>
                <div className="rectangle"></div>
                <div className="metaverse_image__container">
                    <img src={metaverseImage} alt="" />
                </div>
            </div>
        </div>
    )
}