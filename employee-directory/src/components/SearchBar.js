import React from "react"


class SearchBar extends React.Component {
   
    state = {name: ''}
    
    onFormSubmit = (event) => {
        event.preventDefault()
        // takes the onSubmit from the app.js and giving it the term
        console.log(this.state.name)
    }

    onChangeHandler = (event) => {
        this.setState({name: event.target.value}, () => {
            this.props.searchHandler(this.state.name);
        });
    }

    render() {
        return (
        <div>
            <form onSubmit={this.onFormSubmit} >
                <div className="field">
                    <label>Filter Table</label>
                    {/* updates the state with whatever the user types in, held in event.target.value */}
                    {/* the value is whats shown in the input box */}
                    <input type="text" value={this.state.name} onChange={this.onChangeHandler} />
                </div>
            </form>
        </div>

        )
    }
}

export default SearchBar;


