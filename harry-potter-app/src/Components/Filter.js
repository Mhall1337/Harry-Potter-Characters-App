
function Filter({handleCharacterSearch}){
    
    return(
        <div className="searchbar">
      <label htmlFor="search" >Search Character:  </label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleCharacterSearch}
      />
    </div>
    )
}

export default Filter