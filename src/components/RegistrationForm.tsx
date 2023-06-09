import React, { useEffect, useState } from "react";

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
      onClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const form = document.getElementById("registration-form");
      if (form && !form.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-40">
      <div className="bg-black bg-opacity-70 fixed top-0 left-0 w-full h-full" />

      <div
        id="registration-form"
        className="relative z-50 bg-white p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-2">Register to Photo Club Member</h2>
        <p className="mb-4">Get countless benefits by joining us!</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Insert your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 border border-gray-300 rounded-lg px-4 py-2"
          />
          {emailError && <p>{emailError}</p>}

          <label>First Name:</label>
          <input
            type="text"
            placeholder="Insert your first name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mb-2 border border-gray-300 rounded-lg px-4 py-2"
          />
          {firstNameError && <p>{firstNameError}</p>}

          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Insert your last name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mb-2 border border-gray-300 rounded-lg px-4 py-2"
          />
          {lastNameError && <p>{lastNameError}</p>}

          <button
            type="submit"
            className="bg-green-500 w-full text-white mt-2 py-2 px-4 rounded-lg"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
