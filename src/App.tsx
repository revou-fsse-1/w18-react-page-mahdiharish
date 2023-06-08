import React, { useState } from 'react';
import Header from './components/GalleryHeader';
import './App.css'
import CardContainer from './components/CardContainer';
import SearchBar from './components/searchBar';

const App: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchBar = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <div>
    <Header title="Welcome to the Gallery Page!" subtitle="List of member photos" />
    <SearchBar onChange={handleSearchBar} />
    <CardContainer searchQuery={searchQuery} />
    </div>
  );
};

export default App
