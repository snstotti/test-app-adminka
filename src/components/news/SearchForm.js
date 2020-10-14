import React from 'react';


const SearchForm = ({showNews, filterNews}) => {

    const handlaChange=(e)=>{
        filterNews(showNews,e.target.value); 
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline" >
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    name='search' 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={handlaChange} />
            </form>
        </nav>
    )
}

export default SearchForm