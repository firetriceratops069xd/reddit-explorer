import "./Header.css";

function Header() {
    return (
        <header className="app-header">
            <div className="header-logo">
                R
            </div>

            <div className="header-info">
                <h1>Reddit Explorer</h1>
                <p>Explore communities and discussions</p>
            </div>

            <button className="menu-button">
                ☰
            </button>
        </header>
    );
}

export default Header;