import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={input => console.log(input.target.value)}/>;
    };
};

export default SearchBar; 