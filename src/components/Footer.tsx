import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="section-wrapper">
                <h2>Just scratching the surface</h2>
                <div className="container">
                    <div className="container__tile">
                        <h3>About our company</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="container__tile flex-grow">
                        <h3>Getting around</h3>
                        <ul>
                            <li><p>Home</p></li>
                            <li><p>About</p></li>
                            <li><p>Contact</p></li>
                        </ul>
                    </div>
                    <div className="container__tile">
                        <h3>Other things</h3>
                        <ul>
                            <li><p>Lorem ipsum</p></li>
                            <li><p>dolor</p></li>
                            <li><p>sit amet</p></li>
                            <li><p>consectetur</p></li>
                        </ul>
                    </div>
                    <div className="container__tile">
                        <h3>And more</h3>
                        <ul>
                            <li><p>Lorem ipsum</p></li>
                            <li><p>dolor</p></li>
                            <li><p>sit amet</p></li>
                            <li><p>consectetur</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer