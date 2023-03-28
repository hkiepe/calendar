// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

const Nav = ({ userEmail }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>OnlineZoukSchool</span>
      </NavLink>
      {userEmail && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            // eslint-disable-next-line no-restricted-globals
            if (!confirm("Logout from your account?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Logout</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
