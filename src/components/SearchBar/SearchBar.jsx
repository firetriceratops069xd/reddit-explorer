import "./SearchBar.css";

function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search posts, communities..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />

            <button>Search</button>
        </div>
    );
}

export default SearchBar;