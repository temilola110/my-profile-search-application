import "../styles/SearchBar.css";

export default function SearchBar({onChange}) {
    return (
    
        <div className="searchbar-container">
        <form action="#" className="searchbar-wrapper">
          <input
            className="searchbar"
            type="search"
            placeholder="Search by name..."
            onChange={onChange}
            
          />
        </form>
      </div>
      
  
  
    )
  }

 