import Logo from '/images/airbnb-logo.png'
export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo" alt="airbnb logo"/>
        </nav>
    )
}