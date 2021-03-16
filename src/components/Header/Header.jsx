import "./Header.css";

export default function Header() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <a href=".">
                    <img className="nav__img" src={`${process.env.PUBLIC_URL}/static/media/logo.png`} alt="TEST TASK"/>
                </a>
            </div>
            <ul className="nav__menu">
                <li className="menu__item">
                    <a className="menu__link" href=".">Home</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href=".">About</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link menu_selected" href=".">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}