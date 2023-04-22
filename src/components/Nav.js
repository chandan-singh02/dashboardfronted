import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update"> Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
              {/* because when we get out from store or storage it is a string format* so we have to convert into objects */}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
      {/* <li> */}
      {/* {auth ? (
            <Link to="/logout" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )} */}
      {/* </li> */}
      {/* {auth ? (
          <li>
          
            <Link to="/logout" onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">SignUp</Link>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        <li></li> */}
    </div>
  );
};

export default Nav;
