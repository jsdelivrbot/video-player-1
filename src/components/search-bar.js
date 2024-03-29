import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ' '};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={input => this.onInputChange(input.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchChange(term);
    };
}

export default SearchBar; 