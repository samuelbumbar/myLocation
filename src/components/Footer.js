const { NavLink } = require("react-router-dom");

const Footer = () => (
    <footer className="footer">
        <div className="content-container">
            <div className="footer__content">
                <NavLink className="button" to="/categories" activeClassName="is-active">Categories</NavLink>
                <NavLink className="button" to="/locations" activeClassName="is-active">Locations</NavLink>
            </div>
        </div>
    </footer>
)

export default Footer