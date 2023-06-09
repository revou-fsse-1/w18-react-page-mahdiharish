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
            <input className="my-2 w-[300px] px-2 py-2 font-semibold text-lg bg-white text-slate-700 rounded-xl" type="text" placeholder="Search for Photos..." onChange={handleChange} />
        </div>
    );
};

export default SearchBar;