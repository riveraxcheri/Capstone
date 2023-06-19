

const SearchBar = ({userInput, setUserInput}) => {
    
    return ( 
        <form>
            <input type="search"
            placeholder="Search"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            />
        </form>
     );
}
 
export default SearchBar;
// {userInput, setUserInput}