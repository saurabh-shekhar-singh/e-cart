import { useDebounce } from "@/hooks/useDebounce";
import "./Search.css";
import { useEffect, useState } from "react";

function Search({
  setSearchItem,
}: {
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText);

  useEffect(() => {
    if (!debouncedSearch) {
      setSearchItem("");
      return;
    }
    setSearchItem(searchText);
  }, [searchText, setSearchItem, debouncedSearch]);
  return (
    <div className="search-container">
      {/* <select className="search-category"></select> */}
      <input
        type="search"
        className="search-box"
        placeholder="Search Equicart.in"
        onChange={(e) => setSearchText(e.target.value)}
        // onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
}

export default Search;
