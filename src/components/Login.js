import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    ///this for route when u do /login on url bar if user already login it will not redirect to login page but in Nav section we already resolve the login whwn to show likw auth ?A:B so both will be resolve diffrent;ly
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    let result = await fetch("https://dashboard-up9o.onrender.com/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    // if (result.name) {
    //   localStorage.setItem("user", JSON.stringify(result));
    //   localStorage.setItem('token', JSON.stringify(result.auth));
    //   navigate("/");
    // } else {
    //   alert("Please enter correct details");
    // }
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <div className="signup-form">
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
