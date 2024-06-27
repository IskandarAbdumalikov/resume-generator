import React, { useEffect, useState } from "react";
import eye from "../../assets/icons/eye.svg";
import eyeSlash from "../../assets/icons/eye-slash.svg";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google.jpg";
import { Link } from "react-router-dom";
import { useGetValue } from "../../hooks/useGetValue";
import "./login.scss";
import { useLoginUserMutation } from "../../context/userSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { data, error, isLoading, isError, isSuccess }] =
    useLoginUserMutation();

  // useEffect(() => {
  //   if (isSuccess) {
  //     // localStorage.setItem("x-auth-token", data.data.token);
  //   }
  //   if (isError) {
  //     alert(error.data.message);
  //   }
  // }, [isSuccess, isError]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    console.log("data", data);
    signIn(formData);
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin} action="" className="login__form container">
        <h1>Login</h1>
        <input
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
          placeholder="Email"
          type="email"
        />
        <div className="password">
          <input
            required
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            type={!showPassword ? "password" : "text"}
          />
          <button type="button" onClick={() => setShowPassword((p) => !p)}>
            {!showPassword ? (
              <img width={20} src={eye} alt="" />
            ) : (
              <img width={20} src={eyeSlash} alt="" />
            )}
          </button>
        </div>
        <a href="#">Forgot password?</a>
        <button className="login-btn">Login</button>
        <div className="have__account">
          <p>Don`t have an account?</p>
          <Link to={"/register"}>Signup</Link>
        </div>
        <div className="or">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
        <button className="facebook__btn">
          <img src={facebook} alt="" />
          <p>Login with Facebook</p>
        </button>
        <button className="google__btn">
          <img src={google} alt="" />
          <p>Login with Google</p>
        </button>
      </form>
    </div>
  );
};

export default Login;
