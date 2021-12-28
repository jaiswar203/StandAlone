import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-upper">
                <div className="footer-upper-icon">
                    <i className="fab fa-instagram" />
                    <i className="fab fa-facebook" />
                    <i className="fab fa-twitter" />
                    <i className="fab fa-pinterest" />
                </div>
                <div className="footer-upper-link">
                    <Link href={"/"} passHref>
                        Home
                    </Link>
                    <Link href={"/movies"} passHref>
                        Movies
                    </Link>
                    <Link href={"/awards"} passHref>
                        Awards
                    </Link>
                    <Link href={"/upcoming"} passHref>
                        Events
                    </Link>
                </div>
                <div className="footer-upper-sublink">
                    <Link href={"/gallery"} passHref>
                        Gallery
                    </Link>
                    <div className="line">
                        ||
                    </div>
                    <Link href={"/about"} passHref>
                        About
                    </Link>
                    <div className="line">
                        ||
                    </div>
                    <Link href={"/contact"} passHref>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="footer-lower">
                <h2>StandAlone Film Festival,Lorem ipsum dolor sit amet consectetur, </h2>
                <p>@StandAlone Film Festival | All RIghts Reserved </p>
            </div>
        </footer>
    )
}

export default Footer
