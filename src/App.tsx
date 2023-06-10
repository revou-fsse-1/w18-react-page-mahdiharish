import React, { useState } from "react";
import Header from "./components/GalleryHeader";
import CardContainer from "./components/CardContainer";
import SearchBar from "./components/SearchBar";
import RegistrationForm from "./components/RegistrationForm";
import './index.css'

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
    <div className="bg-black flex flex-col items-center min-h-screen">
      <Header
        title="Photo Club Gallery"
        subtitle="List of member photos"
        likeCount={likeCount}
      />
      <SearchBar onChange={handleSearchBar} />
      <CardContainer
        searchQuery={searchQuery}
        setLikeCount={setLikeCount}
      />

      <button 
      className="text-black font-bold text-md mt-6 bg-white py-1 px-4 rounded-lg transform transition-transform hover:scale-105"
      onClick={handleOpenRegistrationForm}>
        Join Photo Club Membership
      </button>

      {isRegistrationFormOpen && (
        <RegistrationForm
          onClose={handleCloseRegistrationForm}
          onSubmit={handleRegistrationSubmit}
        />
      )}

      {isRegistrationSubmitted && (
        <div className="text-white bg-green-500 text-md font-bold mt-4 py-2 px-4 rounded-lg fixed bottom-4 left-1/2 transform -translate-x-1/2">
          Your registration has been submitted successfully!
        </div>
      )}
    </div>
  );
};

export default App;
