import React from "react";

const Verification = ({
  email,
  verificationCode,
  setVerificationCode,
  handleVerification,
}) => {
  return (
    <div className="verification">
      <form
        onSubmit={handleVerification}
        className="verification__form container"
      >
        <h1>Verification</h1>
        <input
          type="text"
          name="code"
          value={verificationCode}
          placeholder="Verification Code"
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          readOnly
          required
        />
        <button type="submit" className="verification-btn">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verification;
