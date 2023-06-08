import React from "react";

type SearchBarProps = {
    onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search for Photos..." onChange={handleChange} />
        </div>
    );
};

export default SearchBar;