import React, { useState } from "react";
import Header from "./components/GalleryHeader";
import CardContainer from "./components/CardContainer";
import SearchBar from "./components/SearchBar";
import RegistrationForm from "./components/RegistrationForm";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [isRegistrationSubmitted, setIsRegistrationSubmitted] = useState(false);

  const handleSearchBar = (value: string) => {
    setSearchQuery(value);
  };

  const handleOpenRegistrationForm = () => {
    setIsRegistrationFormOpen(true);
    setIsRegistrationSubmitted(false);
  };

  const handleCloseRegistrationForm = () => {
    setIsRegistrationFormOpen(false);
  };

  const handleRegistrationSubmit = () => {
    setIsRegistrationSubmitted(true);
  };

  return (
    <div>
      <Header
        title="Welcome to the Gallery Page!"
        subtitle="List of member photos"
        likeCount={likeCount}
      />
      <SearchBar onChange={handleSearchBar} />
      <CardContainer
        searchQuery={searchQuery}
        setLikeCount={setLikeCount}
      />

      <button onClick={handleOpenRegistrationForm}>
        Join Photo Club Membership
      </button>

      {isRegistrationFormOpen && (
        <RegistrationForm
          onClose={handleCloseRegistrationForm}
          onSubmit={handleRegistrationSubmit}
        />
      )}

      {isRegistrationSubmitted && (
        <div>
          Your Registration has been submitted successfully!
        </div>
      )}
    </div>
  );
};

export default App;
