import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: ' '};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.searchTerm}
                onChange={input => this.setState({ searchTerm: input.target.value })}/>
                Value of the input: {this.state.searchTerm}
            </div>
        );
    }
}

export default SearchBar; 