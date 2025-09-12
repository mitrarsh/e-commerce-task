import { useState } from "react";

const SearchBar = ({onSearch}:{onSearch:(value:string)=>void}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);

  };



  return (
    <div className="search-bar flex w-[100%] md:w-[25%] items-center justify-center rounded-[1rem] gap-[1rem]">
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
