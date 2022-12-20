import React from "react";
import "./Login.css";
import nature from "../assets/nature.jpg";
import user from "../assets/user.png";

const Login = () => {
  return (
    <div>
      <div style={{ backgroundImage: "url(" + nature + ")", height: "700px" }}>
        <div className="loginfrom">
          <img src={user} />
          <h1>Sign up Now</h1>
          <form>
            <input type="email" placeholder="your email" />
            <input type="password" placeholder="your password" />
            <div>
              <input type="checkbox" /> I agree to the terms of services
            </div>
            <button className="signbtn">signup</button>
            <hr />
            <p className="or">OR</p>
            <button className="twitterbtn">Login with twitter</button>
            <p>
              Do you have an account ? <a href="#">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
