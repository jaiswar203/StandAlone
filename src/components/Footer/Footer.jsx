import Image from "next/image"
import Link from "next/link"
import Logo from '../../images/logo.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-link">
                <Link href="/" passHref>Home</Link>
                <Link href="/about" passHref>About</Link>
                <Link href="/movies" passHref>Movies</Link>
                <Link href="/upcoming" passHref>Upcoming Events</Link>
                <Link href="/awards" passHref>Awards</Link>
                <Link href="/gallery" passHref>Gallery</Link>
            </div>
            <div className="footer-detail">
                <div className="footer-detail-icon">
                    <div className="footer-detail-icon-item">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="footer-detail-icon-item">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="footer-detail-icon-item">
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                    <div className="footer-detail-icon-item">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="footer-detail-icon-item">
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>

                <div className="footer-detail-title">
                    <h3>STANDALONE FILM FESTIVAL & AWARDS</h3>
                </div>
                <div className="footer-detail-address">
                    <p>710 EAST COMMERCIAL STREET, LOS ANGELES, CA 90012 | 10A, GURUNAGAR SOCIETY, J P ROAD, FOUR BUNGALOW, ANDHERI (W) MUMBAI</p>
                </div>
                <div className="footer-detail-number">
                    <a href="tel:">+918838838384</a>
                </div>
            </div>
            <div className="footer-copyright">
                <h4>COPYRIGHT ©2021 STANDALONE FILM FESTIVAL & AWARDS - ALL RIGHTS RESERVED.</h4>
                <h4>POWERED BY STANDALONE STREAM</h4>
            </div>
        </footer>
    )
}

export default Footer
