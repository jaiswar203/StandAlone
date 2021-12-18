import Image from "next/image"
import Link from "next/link"
import Logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className="logo" >
                <Image src={Logo} />
            </a>
            <input
                className="menu-icon"
                type="checkbox"
                id="menu-icon"
                name="menu-icon"
            />
            <label htmlFor="menu-icon" />
            <nav className="nav">
                <ul className="pt-5">
                    <li>
                        <Link passHref href="/" >Home</Link>
                    </li>
                    <li>
                        <Link passHref href="/about" >About</Link>
                    </li>
                    <li>
                        <Link passHref href="/movies" >Movies</Link>
                    </li>
                    <li>
                        <Link passHref href="/awards" >Award</Link>
                    </li>
                    <li>
                        <Link passHref href="/services" >Services</Link>
                    </li>
                    <li>
                        <Link passHref href="/promotion" >Promotion</Link>
                    </li>
                    <li>
                        <Link passHref href="/upcoming" >Events</Link>
                    </li>
                    <li>
                        <Link passHref href="/gallery" >Gallery</Link>
                    </li>
                    <li>
                        <Link passHref href="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>


    )
}

export default Navbar
