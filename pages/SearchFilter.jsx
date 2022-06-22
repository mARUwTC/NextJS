import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/SearchFilter.module.css'

function SearchFilter() {

    const list = ["banana", "apple", "orange", "mango", "avocado", "cheese", "pieapple", "watermelon", "cherry"];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
        if (event.target.value === ""){
            setFilterList(list);
            return;
        }

        const filteredValues = list.filter((item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setFilterList(filteredValues);
    };

    return (
        <div className={styles.SearchFilter}>
            <div>
                <div>Search: </div>
                <input type="text" onChange={handleSearch}></input>
            </div>
            {filterList && filterList.map((item, index) => (<div key={index}>{item}</div>))}
        </div>
    );
}

export default SearchFilter;