import '../styles/Header.css';

import metaLogoTitle from '../images/metaLogoTitle.png';

export default function Header() {
    return(
        <header>
            <img src={metaLogoTitle} className='content-logo' alt="" />
        </header>
    )
}