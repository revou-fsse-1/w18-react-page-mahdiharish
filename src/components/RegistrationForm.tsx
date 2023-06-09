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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add any form validation logic here

    // Call the onSubmit function passed from the parent component
    onSubmit();
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

        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="submit">Register Now</button>
      </form>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RegistrationForm;
