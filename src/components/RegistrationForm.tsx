import React, { useState } from "react";

type RegistrationFormProps = {
  onClose: () => void;
  onSubmit: () => void;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setFirstNameError("");
    setLastNameError("");
    const isValidEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

    let isValid = true;
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <div>
      <h2>Register to Photo Club Member</h2>
      <p>Get countless benefits by joining us!</p>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}

        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {firstNameError && <p>{firstNameError}</p>}

        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {lastNameError && <p>{lastNameError}</p>}

        <button type="submit">Register Now</button>
      </form>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RegistrationForm;
