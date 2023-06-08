import React, { useState } from 'react';
import Header from './components/GalleryHeader';
import CardContainer from './components/CardContainer';
import SearchBar from './components/searchBar';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const handleSearchBar = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <div>
      <Header title="Welcome to the Gallery Page!" subtitle="List of member photos" likeCount={likeCount} />
      <SearchBar onChange={handleSearchBar} />
      <CardContainer searchQuery={searchQuery} setLikeCount={setLikeCount} />
    </div>
  );
};

export default App;
