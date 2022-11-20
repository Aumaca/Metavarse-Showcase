import '../styles/Nav.css';

import metaLogoTitle from '../images/metaLogoTitle.png';

export default function Nav() {
    return(
        <nav>
            <img src={metaLogoTitle} className='content-logo' alt="" />
        </nav>
    )
}