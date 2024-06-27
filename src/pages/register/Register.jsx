import React, { useEffect, useState } from "react";
import eye from "../../assets/icons/eye.svg";
import eyeSlash from "../../assets/icons/eye-slash.svg";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google.jpg";
import { Link } from "react-router-dom";
import { useGetValue } from "../../hooks/useGetValue";
import {
  useRegisterUserMutation,
  useVerificationUserMutation,
} from "../../context/userSlice";
import Verification from "./Verification";
import "./register.scss";

const initialState = {
  first_name: "",
  image_url: "",
  last_name: "",
  user_name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, handleChange } = useGetValue(initialState);
  const [showVerification, setShowVerification] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [registerUser, { data, error, isLoading, isError, isSuccess }] =
    useRegisterUserMutation();
  const [
    verifyUser,
    {
      data: verifyData,
      error: verifyError,
      isLoading: verifyLoading,
      isError: verifyIsError,
      isSuccess: verifyIsSuccess,
    },
  ] = useVerificationUserMutation();

  useEffect(() => {
    if (isSuccess) {
      setShowVerification(true);
      setEmail(formData.email);
    }
    if (isError) {
      //  console.log(error);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (verifyIsSuccess) {
      alert("Verification successful! Please login.");
    }
    if (verifyIsError) {
      console.log(verifyError.data.error);
    }
  }, [verifyIsSuccess, verifyIsError]);

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  const handleVerification = (e) => {
    e.preventDefault();
    console.log("Verification Code:", verificationCode);
    verifyUser({ email, code: parseInt(verificationCode, 10) });
  };
  // http://18.158.24.26:9050/v1/auth/verification/?email=sherzodforprogramming%40gmail.com&code=973763
  // http://18.158.24.26:9050/v1/auth/verification/?code=761331&email=boburmirzo.brm%40gmail.com
  return (
    <div className="login">
      {showVerification ? (
        <Verification
          email={email}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          handleVerification={handleVerification}
        />
      ) : (
        <form onSubmit={handleRegister} className="login__form container">
          <h1>Register</h1>
          <input
            name="email"
            value={formData.email}
            required
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
          <input
            name="first_name"
            value={formData.first_name}
            required
            placeholder="First name"
            type="text"
            onChange={handleChange}
          />
          <input
            name="last_name"
            value={formData.last_name}
            required
            placeholder="Last name"
            type="text"
            onChange={handleChange}
          />
          <input
            name="user_name"
            value={formData.user_name}
            required
            placeholder="Username"
            type="text"
            onChange={handleChange}
          />
          <input
            name="image_url"
            value={formData.image_url}
            required
            placeholder="Image URL"
            type="text"
            onChange={handleChange}
          />
          <div className="password">
            <input
              name="password"
              value={formData.password}
              required
              placeholder="Password"
              type={!showPassword ? "password" : "text"}
              onChange={handleChange}
            />
            <button type="button" onClick={() => setShowPassword((p) => !p)}>
              {!showPassword ? (
                <img width={20} src={eye} alt="Show password" />
              ) : (
                <img width={20} src={eyeSlash} alt="Hide password" />
              )}
            </button>
          </div>
          <button className="register-btn">Register</button>
          <div className="have__account">
            <p>Do you already have an account?</p>
            <Link to="/login">Sign in</Link>
          </div>
          <div className="or">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <button className="facebook__btn">
            <img src={facebook} alt="Register with Facebook" />
            <p>Register with Facebook</p>
          </button>
          <button className="google__btn">
            <img src={google} alt="Register with Google" />
            <p>Register with Google</p>
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
