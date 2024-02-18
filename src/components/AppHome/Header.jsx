import { Link } from "react-router-dom";
import InstagramLogo from "../sidebar/InstagramLogo";
const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom">
      <InstagramLogo />
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        ></a>
      </div>
      <div className="col-md-3 text-end">
        <Link
          to="/login"
          type="button"
          className="btn btn-outline-primary me-2"
        >
          Login
        </Link>
        <Link to="/signup" type="button" className="btn btn-primary signup">
          Sign-up
        </Link>
      </div>
    </header>
  );
};
export default Header;
