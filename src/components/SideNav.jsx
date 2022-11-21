import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faVrCardboard, faHandshake, faMagnifyingGlass, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/SideNav.css';

import metaLogo from '../images/metaLogo.png';

export default function SideNav() {
    const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

    function openSideNav() {
        if (sideNavIsOpen) {
            setSideNavIsOpen(false);
        } else {
            setSideNavIsOpen(true);
        }
    }

    return (
        <>
            <div className="sidenav__container">
                <div className={sideNavIsOpen ? "sidenav__background open" : "sidenav__background"}></div>
                <div className={sideNavIsOpen ? "sidenav open" : "sidenav"}>
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
                <div className={sideNavIsOpen ? "sidenav__button open" : "sidenav__button"} onClick={() => openSideNav()}>
                    <button>
                        <FontAwesomeIcon icon={sideNavIsOpen ? faAngleLeft : faAngleRight} />
                    </button>
                </div>
            </div>
        </>
    )
}