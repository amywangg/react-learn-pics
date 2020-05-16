import React from 'react';

class SearchBar extends React.Component {
    // event handlers (controlled)
    state = { term: '' };

    // Error message => console.log(this.state.term);
    // "this" references instance of SearchBar class but is undefined when invoked here
    // arrow function automatically binds "this" to function
    onFormSubmit = (event) => {
        event.preventDefault();
        // run function passed from App.js through props
        this.props.runOnSubmit(this.state.term);
    }

    // Alternative Binding
    // onSubmit={(e) => this.onFormSubmit(e)} in <form>
    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term)
    // }

    // CONTROLLED VS UNCONTROLLED
    // uncontrolled would require fetching from the DOM element (not in React World)
    // controlled updates the value live so fetching it is immediate
    // bad practice to store values into HTML DOM, store in REACT as state
    render() {
        return (
            <div className="ui segment">
                {/* arrow function invoked to bind "this" */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* do not include parentheses onChange or it will run when rendered */}
                        {/* alternate syntax: e => console.log(e.target.value) */}
                        {/* Uncontrolled: onChange={this.onInputChange} */}
                        {/* Controlled: */} <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        // setState triggers rerender & is assigned to value prop
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;