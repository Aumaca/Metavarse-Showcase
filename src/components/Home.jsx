import { useState, useEffect } from "react";

import '../styles/Home.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faVrCardboard, faArrowUpRightFromSquare, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import metaverseImage from '../images/3d-metaverse.png';

import Header from './Header';
import SideNav from "./SideNav";

export default function Home() {
    const [youtubeDropdownIsOpen, setYoutubeDropdownIsOpen] = useState(false);

    function toOpenDropdown(x) {
        if (x === 'youtube') {
            if (youtubeDropdownIsOpen) {
                setYoutubeDropdownIsOpen(false);
            } else {
                setYoutubeDropdownIsOpen(true);
            }
        }
    }

    return (
        <div className="main">

            <SideNav />

            <Header />

            <div className="content">

                <div className="first_part">
                    <div className="home__title">
                        <p className="title">Welcome to the</p>
                        <p className="title_metaverse">Metaverse</p>
                    </div>

                    <div className="rectangle"></div>

                    <div className="metaverse_image__container">
                        <img src={metaverseImage} alt="" />
                    </div>
                </div>

                <div className="second_part">
                    <p className="title">Dive in...</p>

                    <div className="youtube__apresentation__container">
                        <div className={youtubeDropdownIsOpen ? "youtube__apresentation active" : "youtube__apresentation"} onClick={() => toOpenDropdown('youtube')}>
                            <div className="youtube__apresentation__logo">
                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                            </div>
                            <div className="youtube__apresentation__title">
                                Check out about this new universe
                            </div>
                            <div className="youtube__apresentation__toggle">
                                <FontAwesomeIcon icon={youtubeDropdownIsOpen ? faAngleUp : faAngleDown}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={youtubeDropdownIsOpen ? "youtube__apresentation__iframe active" : "youtube__apresentation__iframe"} >
                            <iframe src="https://www.youtube.com/embed/Uvufun6xer8" title="The Metaverse and How We'll Build It Together -- Connect 2021" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </div>

                    <a href="https://meta.com">
                        <div className="product__apresentation" onClick={() => toOpenDropdown('product')}>
                            <div className="product__apresentation__logo">
                                <FontAwesomeIcon icon={faVrCardboard}></FontAwesomeIcon>
                            </div>
                            <div className="product__apresentation__title">
                                See our products to access the Metaverse!
                            </div>
                            <div className="product__apresentation__toggle">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="third_part">
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                    </div>
                </div>

                <div className="fourth_part">

                </div>
            </div>
        </div>
    )
}