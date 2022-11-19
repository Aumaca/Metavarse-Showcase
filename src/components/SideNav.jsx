import React, { useState, useEffect } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe, faVrCardboard, faHandshake, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import '../styles/SideNav.css'

import metaLogo from '../images/metaLogo.png'

export default function SideNav() {
    return (
        <div className="sidenav">
            <div className="header">
                <img src={metaLogo} alt="" />
            </div>
            <div className="topics">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faVrCardboard} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHandshake} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                </ul>
            </div>
        </div>
    )
}