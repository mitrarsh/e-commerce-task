import { useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar = ({onSearch}:SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="filter-box flex w-[100%] md:w-[25%] items-center justify-center rounded-[1rem] gap-[1rem]">
      <input
        className="w-full outline-0"
        type="search"
        placeholder="What are you looking for?"
        onChange={handleChange}
        value={searchTerm}
      />
      <img src="/assets/icons/search.svg" alt="" />
    </div>
  );
};

export default SearchBar;
