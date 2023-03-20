import { useState } from 'react'
import Logo from '../assets/logo.svg'
import './header.scss'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="section-wrapper">
                <button className="header__logo">
                    <img src={Logo} alt="logo" />
                </button>

                <div className="header__menu">
                    <button onClick={() => setMenuOpen(prev => !prev)} className={menuOpen ? "header__menu--button" : "header__menu--button header__menu__button--active"} title='menu'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                    <nav className={menuOpen ? 'header__menu--nav' : 'header__menu--nav header__menu__nav-shown'}>
                        <ul>
                            <li>home</li>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                        <ul>
                            <li>sign in</li>
                            <li className='button'>sign up</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header