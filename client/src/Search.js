import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Search({ searchTerm, setSearchTerm }) {

    function handleSearch(search) {
        setSearchTerm(search)
        }

return (
    <>
    <input 
        name="prevent_autofill" 
        id="prevent_autofill"
        type="search"
        placeholder="Search Breeds"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
    /> 
    <Button variant="outline-success">Search Breeds</Button>
    </>

)
}

export default Search
