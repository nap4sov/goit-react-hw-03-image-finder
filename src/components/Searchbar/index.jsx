import { Component } from "react";

class Searchbar extends Component{
    state = {
        value: ''
    }

    handleTextInput = (event) => {
        const value = event.currentTarget.value
        this.setState({value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
    <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                value={this.state.value}
                onChange={this.handleTextInput}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>
    )
    } 
 }

export default Searchbar