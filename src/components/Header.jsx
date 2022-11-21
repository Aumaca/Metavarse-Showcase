import '../styles/Header.css';

import metaLogoTitle from '../images/metaLogoTitle.png';

export default function Header() {
    return(
        <header>
            <a href="/">
                <img src={metaLogoTitle} className='content-logo' alt="" />
            </a>
        </header>
    )
}