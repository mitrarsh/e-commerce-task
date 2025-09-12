import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

    const navigate= useNavigate()
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange= (e:any)=>{
        const value = e.target.value;
        setSearchTerm(value);
    }
    
    function handleKeyDown(e:any){
  if (e.key === 'Enter' && searchTerm.trim()) {
    navigate(`/search-results?q=${searchTerm}`);
}
}


  return (
    <div className="search-bar flex w-[50%] md:w-[25%] items-center justify-center rounded-[1rem] gap-[1rem]">
          <input
            className="w-full outline-0"
            type='search'
            placeholder="What are you looking for?"
            onChange={handleChange}
            value={searchTerm}
            onKeyDown={handleKeyDown}
          />
          <img src="/assets/icons/search.svg" alt=""/>
        </div>
  )
}

export default SearchBar;