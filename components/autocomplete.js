import { useState, useEffect, useRef } from "react";

function Autocomplete({ suggestions, onSearch }) {
    const [search, setSearch] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        setFilteredSuggestions(suggestions.filter((college) =>
            college.name.toLowerCase().includes(search.toLowerCase())
        ));
    }, [search, suggestions]);

    const handleSearch = () => {
        if (selectedSuggestion) {
            setSearch(selectedSuggestion.name.toLowerCase());
            setSelectedSuggestion(null);
        }
        onSearch(search);
    };

    const handleClick = (college) => {
        setSelectedSuggestion(college);
        setSearch(college.name.toLowerCase());
        setExpanded(false);
        searchInputRef.current.focus();
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (selectedSuggestion) {
                setSearch(selectedSuggestion.name.toLowerCase());
            }
            setExpanded(false);
            setSelectedSuggestion(null);
        }, 200);
    };

    return (
        <div
            className={`search-container relative max-w-md transition-width duration-300 ease-in-out ${expanded ? "w-72" : "w-40"
                }`}
        >
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search College, Course"
                className={`rounded-lg border-2 h-12 mx-2 px-2 hover:border-cyan focus:outline-none focus:border-cyan w-full ${expanded ? "shadow-md" : ""
                    }`}
                ref={searchInputRef}
                onFocus={() => setExpanded(true)}
                onBlur={handleBlur}
            />
            {search.length > 0 && expanded && (
                <ul
                    className="suggestions-container"
                >
                    {filteredSuggestions.map((college) => (
                        <li key={college.id}>
                            <button
                                type="button"
                                onClick={() => handleClick(college)}
                                className={`text-left w-full py-1 px-2 hover:bg-gray-200 ${college === selectedSuggestion ? "bg-gray-200" : ""
                                    }`}
                            >
                                {college.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button
                type="button"
                onClick={handleSearch}
                className="search-button"
            >
                Search
            </button>
        </div>
    );
}

export default Autocomplete;
